const Post = require('../models/postModel');

exports.createPost = async (req, res, next) => {
   const {title, body} = req.body;
   const post = await Post.create({title, body});
   res.status(201).json({
      success: true,
      post
   });
}
