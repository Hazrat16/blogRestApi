const User = require("../models/userModel");

exports.getAllUsers = async (req, res,  next) => {
    try {
        // Assuming you have a User model defined
        const users = await User.find();
        res.status(200).json(users);
    }catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}