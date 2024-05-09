const User = require('../model/userModel');
const generateToken = require('../utils/generateToken');

const loginUser = async (req,res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if(user && (await user.matchPassword(password))) {
        generateToken(res,user._id);
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        });
    }
    else{
        res.status(400).json({msg: "Invalid Email/Password"});
    }
}

const registerUser = async (req,res) => {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(201).json({ msg: 'User already exists' });
        return;
    }
    const user = await User.create({ name, email, password });

    if (user) {
        generateToken(res, user._id);
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        });
    } else{
        res.status(400).json({ msg: 'Invalid user data' });
    }
}

const logoutUser = async (req,res) => {
    res.cookie('jwt', '', { 
        httpOnly: true,
        expires: new Date(0),
     });
    res.status(200).json({ msg: 'User Logged Out' });
}

const getUserProfile = async (req,res) => {
    const user = {
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email,
    }
    res.status(200).json(user);
}

const updateUserProfile = async (req,res) => {
    const user = await User.findById(req.user._id);
    if(user){
        user.name = req.body.name || user.name;

        if(req.body.password){
            user.password = req.body.password;
        }

        const updatedUser = await user.save();

        res.status(201).json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
        });
    } else{
        res.status(404).json({ msg: 'User not found' });
    }
}

module.exports = {
    loginUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
};