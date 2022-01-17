import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  scalar Date

  type Book {
    title: String
    author: String
    image: String
    createdAt: Date
    like: Int
    comments: [String]
  }

  type User {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    token: String
  }
  type Token {
    token: String
  }

  type Query {
    books: [Book]
    book(id:String): Book
  }
  
  type Mutation {
    addBook(title: String, author: String, image: String):Book

    updateBook(id:String, title: String, author: String, image: String):Book

    deleteBook(id: String): Int

    register(firstName: String!, lastName: String!, email: String!, password: String!): Token
    login(email: String!, password: String!): Token
  }
`;