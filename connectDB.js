
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
}
module.exports = connectDB;
// This code connects to a MongoDB database using Mongoose. It exports a function that attempts to connect to the database and logs the result. If the connection fails, it logs the error and exits the process.


