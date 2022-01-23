import { ApolloServer } from 'apollo-server-express';
import { graphqlUploadExpress } from 'graphql-upload';
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors';
import bookRoutes from './routes/bookRoutes';
import { typeDefs } from './graphql/schema';
import { resolvers } from './graphql/resolvers';
import auth from './middleware/auth';
import { applyMiddleware } from 'graphql-middleware';
import { makeExecutableSchema } from 'graphql-tools';
import dotenv from 'dotenv';
dotenv.config();

const app = express()

const port = process.env.PORT || 5000;
const uri = process.env.URI || '';

app.use(cors());
app.use(express.json());
app.use(bookRoutes);

mongoose.connect(uri);
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully')
})

const connectApollo = async () => {

    const executableSchema = makeExecutableSchema({ typeDefs, resolvers });
    const schemaWithMiddleware = applyMiddleware(executableSchema, auth);

    const server = new ApolloServer({
        schema: schemaWithMiddleware,
        context: ({ req }) => {
            const token = req.headers.authorization || '';
            return { token }
        },
    });

    await server.start();
    app.use(graphqlUploadExpress());
    server.applyMiddleware({ app });

    app.use((req, res) => {
        res.send("Server started")
    })

}

connectApollo();

app.listen({ port }, () => {
    console.log(`Server is running at http://localhost:${port}`);
});