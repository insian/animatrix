const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('../model/userModel');

const protect = async (req, res, next) => {
    let token;
    token = req.headers.cookie;
    if (!token) {
        res.status(401).json({ msg: 'Not authorized, no token' });
        return;
    } else {
        token = token.substring(4);
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);    
            const user = await User.findById(decoded.id).select('-password');
            req.user = user;
            next();
        } catch{
            res.status(401).json({ msg: 'Not authorized, token failed' });
            return;
        }
    }
};

exports.protect = protect;