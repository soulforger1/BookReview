import express from "express";
import bookModel from "../models/books";

const bookRoutes = express.Router()

bookRoutes.post('/book', async (request, response) => {
    const book = new bookModel(request.body)
    
    try {
        await book.save();
        
        response.send(book);
    } catch (error) {
        response.status(500).send(error)
    }
})
bookRoutes.get('/book', async (request, response) => {
    const books = await bookModel.find({})

    try {
        response.send(books)
    } catch (error) {
        response.status(500).send(error)
    }
})

export default bookRoutes