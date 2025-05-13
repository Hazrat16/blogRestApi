const Post = require('../models/postModel');

exports.createPost = async (req, res, next) => {
   const {title, body, username, category, photo} = req.body;
   const post = await Post.create({title, body, username, category, photo});
   res.status(201).json({
      success: true,
      post
   });
}
