import User from "../models/usermodel.js";
import jwt from 'jsonwebtoken'

export const registeruser = async (req, res) => {
    const { email, username, password } = req.body;

    try {
        const userdetails = await User.create({ email, username, password });
        return res.status(200).json("user added successfully");
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }

};
export const loginuser = async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const customerinfo = await User.findOne({ $or: [{ email }, { username }] });
        if (!customerinfo) return res.status(404).json({ message: "user not found" });
        const ismatch = await customerinfo.comparePassword(password);
        if (!ismatch) return res.status(400).json({ message: "invaild credentials" });
        const token = jwt.sign({ username: customerinfo.username, }, process.env.SECRET, { expiresIn: '2h' })
        res.cookie('token', token)
        res.status(200).json({ message: "user loged in sucessfully" });
    } catch (error) {
        res.send(error.message)
    }
}

