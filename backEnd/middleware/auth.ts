import { ValidationError } from "apollo-server-express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const config: any = process.env;

const tokenChecker = async (resolve?: any, parent?: any, args?: any, context?: any, info?: any) => {
    let { token } = context;
    token = token.replace('Bearer ', '')

    if (token === undefined || token === null) {
        throw new ValidationError("Token not found");
    }

    try {
        const decoded = jwt.verify(token, config.TOKEN_KEY);

        return await resolve(parent, args, context, info)
    } catch (err) {
        throw new ValidationError("Invalid Token");
    }
}

const verifyToken = {
    // Query: {
    //     books: tokenChecker,
    //     book: tokenChecker
    // },
    Mutation: {
        addBook: tokenChecker,
        updateBook: tokenChecker,
        deleteBook: tokenChecker,
    }
}


export default verifyToken;