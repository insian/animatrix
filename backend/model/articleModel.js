const mongoose = require("mongoose");

const articles = new mongoose.Schema({
    anime: {
        type: String,
        required: true,
    },
    sdesc: {
        type: String,
        required: true,
    },
    src: {
        type: String,
        required: true,
    },
    contributor: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model("Articles", articles);