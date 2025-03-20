// Modelo Libro
const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema(
    {
        title: String,
        author: String,
        genre: String,
        publication_date: String
    }
)

// exportar un modelo
module.exports = mongoose.model('Book', bookSchema)