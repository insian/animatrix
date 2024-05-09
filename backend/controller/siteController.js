const GalleryImages = require("../model/galleryModel");
const Articles = require("../model/articleModel");
const Latest_Stories = require("../model/storiesModel");

const getGallery = async (req, res) => {
    const gallery = await GalleryImages.find({});
    if (gallery) {
        res.status(200).json(gallery);       
    } else {
        res.status(200).json({ msg: 'No Images in Gallery' });
    }
}

const getArticles = async (req, res) => {
    const articles = await Articles.find({});
    if (articles) {
        res.status(200).json(articles);
    }else{
        res.status(200).json({ msg: 'No Articles' });
    }
}

const getSingleArticle = async (req, res) => {
    const { _id } = req.body;
    const singleArticles = await Articles.findOne({ _id });
    if (singleArticles) {
        res.status(200).json(singleArticles);
    }else{
        res.status(200).json({ msg: 'No Articles' });
    }
}

const getStories = async (req, res) => {
    const articles = await Latest_Stories.find({});
    if (articles) {
        res.status(200).json(articles);
    }else{
        res.status(200).json({ msg: 'No Articles' });
    }
}

module.exports = {
    getGallery,
    getArticles,
    getSingleArticle,
    getStories,
}