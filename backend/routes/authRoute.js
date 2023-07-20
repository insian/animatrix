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

router.get("/", (req, res) => {
    res.json({message: "Welcome to Animtrix Auth API"});
})

router.post("/login", loginUser);

router.post("/register", registerUser);

router.get("/logout", logoutUser);

router.get("/user", protect, getUserProfile);

router.put("/user", protect, updateUserProfile);

module.exports = router;