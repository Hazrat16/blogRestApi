exports.authMiddleware = async (req, res, next) => {

    try{
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    // Verify the token here (e.g., using JWT)
    // If valid, call next()
    // If invalid, return an error response
    next()
    }catch (error) {
        console.error("Error in auth middleware:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};