const { createPost } = require('../controllers/postController');
const { authMiddleware } = require('../middlewares/auth');

const postRoute = require('express').Router();

postRoute.get('/',authMiddleware , createPost);

exports.postRoute = postRoute;