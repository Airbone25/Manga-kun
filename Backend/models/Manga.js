const mongoose = require('mongoose');

const MangaSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    manga: {
        type: String,
        required: true
    },
    cover: {
        type: String,
        required: true
    },
    license: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('Manga',MangaSchema)