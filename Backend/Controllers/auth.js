const User=require('../Models/userSchema')
let bcrypt=require('bcrypt')
const { generateTokenAndSetCookie } = require('../Utils/generateTokenAndSetCookie');
const {sendVerificationEmail}=require('../Mailtrap/email')

exports.SignUP = async (req, res) => {
    const { email, password, name } = req.body;

    try {
        if (!email || !password || !name) {
            return res.status(400).json({
                success: false,
                message: "Fill all the required details"
            });
        }

        const existuser = await User.findOne({ email });
        if (existuser) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }

        let hashedPassword;
        const verificationToken = Math.floor(1000000 + Math.random() * 9000000).toString();
        try {
            hashedPassword = await bcrypt.hash(password, 10);
        } catch (error) {
            return res.status(400).json({
                success: false,
                message: 'Error occurs while hashing the data'
            });
        }

        const newUser = await User.create({
            email,
            name,
            password: hashedPassword,
            verificationToken,
            verificationTokenExpiresAt: Date.now() + 1000 * 60 * 60 * 24
        });

        generateTokenAndSetCookie(res, newUser._id);
        await sendVerificationEmail(newUser.email,verificationToken)

        res.status(201).json({
            success: true,
            message: "User created successfully",
            newUser: {
                ...newUser._doc,
                password: undefined
            }
        });

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
};


exports.Login=async(req,res)=>{
    res.send("Login")
}

exports.Logout=async(req,res)=>{
    res.send("LogOut")
}
