const { createPost, getAllPosts } = require('../controllers/postController');
const { authMiddleware } = require('../middlewares/auth');

const postRoute = require('express').Router();

postRoute.post('/',authMiddleware , createPost);
postRoute.get('/' , getAllPosts);
exports.postRoute = postRoute;