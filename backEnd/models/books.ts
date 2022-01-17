const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    author: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    like: { type: Number, default: 0 },
    comments: { type: Array, required: false },
})

const bookModel = mongoose.model('books', bookSchema)
export default bookModel