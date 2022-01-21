const mongoose = require('mongoose')
const Schema = mongoose.Schema

const authorSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: Array, required: true },
    books: { type: Array, required: true },
})

const authorModel = mongoose.model('authors', authorSchema)
export default authorModel