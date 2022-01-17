import { UserInputError, AuthenticationError } from "apollo-server-express";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import bookModel from '../models/books';
import userModel from '../models/user';
import dotenv from 'dotenv';
dotenv.config();

export const resolvers = {
    Query: {
        books: async () => {
            return await bookModel.find();
        },
        book: async (root: any, args: any) => {
            return await bookModel.findOne({ _id: args.id });
        }
    },

    Mutation: {
        addBook: async (root: any, args: any) => {
            const book = new bookModel({ title: args.title, author: args.author, image: args.image, createdAt: new Date(), like: 0, comment: [] });
            await book.save();

            return book;
        },
        updateBook: async (root: any, args: any) => {
            const { id, ...others } = args;

            await bookModel.updateOne({ _id: args.id }, others);

            const res = bookModel.findOne({ _id: args.id });

            return res;
        },
        deleteBook: async (root: any, args: any) => {
            await bookModel.deleteOne({ _id: args.id });

            return 0;
        },
        register: async (root: any, args: any) => {
            const { firstName, lastName, email, password } = args;

            if (!(email && password && firstName && lastName))
                throw new UserInputError('All input is required');

            const oldUser = await userModel.findOne({ email });

            if (oldUser)
                throw new AuthenticationError('User Already Exist. Please Login');

            const encryptedPassword = await bcrypt.hash(password, 10);

            const newUser = await userModel.create({ firstName, lastName, email: email.toLowerCase(), password: encryptedPassword });

            const token = jwt.sign(
                { user_id: newUser._id, email },
                process.env.TOKEN_KEY || "",
                {
                    expiresIn: "2h",
                }
            );

            return token;
        },
        login: async (root: any, args: any) => {
            const { email, password } = args;

            if (!(email && password))
                throw new UserInputError('All input is required.');

            const user = await userModel.findOne({ email });

            if (!user)
                throw new AuthenticationError("User not found.");

            const passCorrect = await bcrypt.compare(password, user.password);

            if (!passCorrect)
                throw new AuthenticationError("Incorrect password.");

            const token = await jwt.sign(
                { user_id: user._id, email },
                process.env.TOKEN_KEY || "",
                {
                    expiresIn: "2h",
                }
            );

            return { token };
        }
    }
};