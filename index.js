const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const connectDB = require('./connectDB'); // Assuming connectDB.js is in the same directory
const { signUpRoute } = require('./routes/auth/signUpRoute');
const { loginRoute } = require('./routes/auth/loginRoute');
const { userRoute } = require('./routes/userRoute');
const { postRoute } = require('./routes/postRoute');
const { categoryRoute } = require('./routes/categoryRoute');
const morgan = require("morgan");
const multer = require("multer");
require('dotenv').config();

const app = express();
app.use(morgan("dev"));

const PORT = process.env.PORT || 4000;

//file upload by multer
const uploadStorage = multer.diskStorage({
    destination:(req, file, callback) =>{
        callback(null,"./images")
    },
    filename:(req, file, callback) =>{
        callback(null,file.originalname)
    },
})

const upload = multer({storage:uploadStorage})

app.post('/api/upload',upload.single("file"),(req,res)=>{
    console.log("file found",req.file)
})

// Middleware
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Blog REST API');
});

app.use('/api/signup', signUpRoute);
app.use('/api/login', loginRoute);

// User Routes
app.use('/api/user', userRoute);

// Post Routes
app.use('/api/post', postRoute);

// Category Routes
app.use('/api/category',categoryRoute)

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