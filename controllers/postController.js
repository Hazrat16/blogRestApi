const Post = require('../models/postModel');

//create post
exports.createPost = async (req, res, next) => {
   const {title, body, username, category, photo} = req.body;
   const post = await Post.create({title, body, username, category, photo});
   res.status(201).json({
      success: true,
      post
   });
}

//get all posts
exports.getAllPosts = async (req, res, next) => {
   const posts = await Post.find();
   res.status(200).json({
      success: true,
      posts
   });
}

//get post by id
exports.getPostById = async (req, res, next) => {
   const post = await Post.findById(req.params.id);
   res.status(200).json({
      success: true,
      post
   });
}
