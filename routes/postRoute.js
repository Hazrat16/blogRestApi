const { createPost, getAllPosts, getPostById, updatePost, deletePost } = require('../controllers/postController');
const { authMiddleware } = require('../middlewares/auth');

const postRoute = require('express').Router();

postRoute.post('/',authMiddleware , createPost);
postRoute.get('/' , getAllPosts);
postRoute.get('/:id', getPostById);
postRoute.put('/:id', updatePost);
postRoute.delete('/:id', deletePost);
exports.postRoute = postRoute;