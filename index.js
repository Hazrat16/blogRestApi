const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const connectDB = require('./connectDB'); // Assuming connectDB.js is in the same directory
const { signUpRoute } = require('./routes/auth/signUpRoute');
const { loginRoute } = require('./routes/auth/loginRoute');
const { userRoute } = require('./routes/userRoute');

require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Blog REST API');
});

app.use('/api/signup', signUpRoute);
app.use('/api/login', loginRoute);
app.use('/api/user', userRoute);

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        // Start the server
        
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
            connectDB();
        });
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB', err);
    });