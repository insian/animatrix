const mongoose = require("mongoose");

const galleryimages = new mongoose.Schema({
    src: {
        unique: true,
        type: String,
        required: true,
    },
    width: {
        type: Number,
        required: true,
    },
    height: {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model("GalleryImages", galleryimages);