const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
    price: { type: String, required: true },
    description: { type: Array, required: true },
    poster: { type: String, required: true },
    detail: { type: Object, required: true },
})

const bookModel = mongoose.model('books', bookSchema)
export default bookModel