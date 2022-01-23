import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  scalar Date
  scalar Upload

  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }

  type Detail {
    title: String
    author: [String]
    edition: Int,
    publisher: String
    isbn: String
    length: String
    width: String
    ages: String
    format: String
    category: String
    date: String
    pages: Int
    height: String
    weight: String
  }

  type Book {
    price: String
    description: [String]
    poster: String
    detail: Detail
  }

  type User {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    token: String
  }

  type BookReview {
    poster: String
    id: String
  }
  type Author {
    name: String
    description: [String]
    image: String
    books: [BookReview]
  }

  type Token {
    token: String
  }

  type Query {
    books: [Book]
    authors: [Author]
    author(name: String): Author
    book(id:String): Book
  }
  
  type Mutation {
    singleUpload(file: Upload!): File!

    addBook(title: String, author: String, image: String):Book

    updateBook(id:String, title: String, author: String, image: String):Book

    deleteBook(id: String): Int

    register(firstName: String!, lastName: String!, email: String!, password: String!): Token
    login(email: String!, password: String!): Token
  }
`;