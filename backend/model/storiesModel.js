const mongoose = require("mongoose");

const latest_stories = new mongoose.Schema({
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
    }
})

module.exports = mongoose.model("Latest_Stories", latest_stories);