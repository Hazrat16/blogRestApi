const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
    },
    body: {
        type: String,
        required: [true, 'Body is required'],
    },
    username: {
        type: String,
        required: [true, 'Username is required'],
        default: 'admin',
    },
    category: {
        type: Array,
        required: false,
    },
    
    photo: {
        type: String,
        required: true,
    },
},
{
    timestamps: true,
});

module.exports = mongoose.model('Post', postSchema);