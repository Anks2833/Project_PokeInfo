import jwt from "jsonwebtoken"
import { userModel } from "../models/user.model.js"

export const verifyJWT = async (req, res, next) => {

    if (req.cookies.token) {
        try {
            const data = jwt.verify(req.cookies.token, process.env.JWT_SECRET)

            req.user = await userModel.findOne({ username: data.username }).select("-password")

            next()

        } catch (err) {
            res.status(400).send("Not authorised")
        }
    }

    if (!req.cookies.token) {
        res
            .status(401)
            .send("Not authorised to access the content")
    }

}