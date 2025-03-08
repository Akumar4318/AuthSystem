const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.generateTokenAndSetCookie = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "6d"
    });

    res.cookie("token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)
    });

    return token;
};
