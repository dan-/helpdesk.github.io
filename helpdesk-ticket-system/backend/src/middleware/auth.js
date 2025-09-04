const jwt = require('jsonwebtoken');
const User = require('../models/user');

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

const checkUserExists = async (req, res, next) => {
    const { username } = req.body;
    const user = await User.findOne({ username });
    if (user) {
        return res.status(400).json({ message: 'User already exists' });
    }
    next();
};

module.exports = {
    authenticateToken,
    checkUserExists
};