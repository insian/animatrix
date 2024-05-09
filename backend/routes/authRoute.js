const express = require("express");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

const {
    loginUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
} = require("../controller/authController");

const {
    getGallery,
    getArticles,
    getStories,
    getSingleArticle,
} = require("../controller/siteController");

router.get("/", (req, res) => {
    res.json({message: "Welcome to Animtrix Auth API"});
})

router.post("/login", loginUser);

router.post("/register", registerUser);

router.get("/logout", logoutUser);

router.get("/user", protect, getUserProfile);

router.put("/user", protect, updateUserProfile);

router.get("/gallery", getGallery);

router.get("/articles", getArticles);

router.post("/articles", getSingleArticle);

router.get("/stories", getStories);



module.exports = router;