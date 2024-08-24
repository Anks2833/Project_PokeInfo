import { userModel } from "../models/user.model.js";
import bcrypt from "bcrypt";
import generateToken from "../utils/GenerateToken.js";


const registerUser = async (req, res) => {


    //To register a user
    const { username, password } = req.body

    try {
        let user = await userModel.findOne({ username })
        if (user) {
            return res.status(400).send("User already exists")
        }

        let salt = await bcrypt.genSalt(10)
        let hashedPass = await bcrypt.hash(password, salt)

        user = await userModel.create({
            username,
            password: hashedPass,
            image: ""
        })

        //user ko login kardo just after account creation
        let token = generateToken({ username })


        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            maxAge: 30 * 24 * 60 * 60 * 1000
        })

        res.status(201).send(user)
    } catch (error) {
        res.status(500).send(error.message)
    }

}

const logInUser = async (req, res) => {

    //To login a user
    try {
        const { username, password } = req.body
        console.log("Username:", username); // Debugging
        console.log("Password:", password); // Debugging
        const user = await userModel.findOne({ username })

        if (!user) {
            return res.status(500).send("Username or password Incorrect")
        }

        let result = await bcrypt.compare(password, user.password)

        if (result) {
            let token = generateToken({ username })

            res.cookie("token", token, {
                httpOnly: true,
                secure: true,
                sameSite: 'none',
                maxAge: 30 * 24 * 60 * 60 * 1000
            })

            console.log("Login Successful");
            res.status(200).send(`Logged in successfully the user with name: ${user.username}`)
            console.log(req.cookies.token)
        } else {
            return res.status(500).send("Username or password Incorrect")
        }

    } catch (err) {
        res.status(500).send(err.message)
    }

}


const logOutUser = async (_, res) => {

    // Invalidate JWT token on server side
    const decodedToken = jwt.decode(req.cookies.token);
    const payload = { ...decodedToken, exp: 0 };
    const invalidToken = jwt.sign(payload, process.env.JWT_SECRET);

    res.cookie('token', invalidToken, {
        httpOnly: true,
        secure: true,
        maxAge: 0 // Set maxAge to 0 to delete cookie immediately
    });

    res.status(200).send("Logged out successfully");
}

const getUserProfile = (req, res) => {
    // Always check if req.user exists to avoid sending undefined properties
    if (!req.user) {
        return res.status(401).json({ message: 'Unauthorized: No user found.' });
    }

    // Send the user profile information
    res.status(200).json({
        message: 'Logged in ho aap',
        userProfile: req.user
    });
};


export {
    registerUser,
    logInUser,
    logOutUser,
    getUserProfile
}