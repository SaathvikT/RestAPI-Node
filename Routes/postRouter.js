const express = require('express');

function routes(SetOfPosts) {
  const postRouter = express.Router();

  // Displays set of posts or post depending on the query parameter.
  postRouter.route('/posts')
    .post((req, res) => {
      const deployPost = new SetOfPosts({
        title: req.body.title,
        body: req.body.body
      });
      deployPost.save();
      return res.status(201).json(deployPost);
    })
    .get((req, res) => {
      SetOfPosts.findById(req.query, (err, post) => {
        if (err) {
          return res.sendStatus(404);
        }
        return res.json(post);
      });
    });

  // Delete a post based upon its id.
  postRouter.route('/posts/delete')
    .get((req, res) => {
      SetOfPosts.findByIdAndDelete(req.query, (err) => {
        if (err) {
          return res.json({ success: false, message: err });
        }
        return res.json({ success: true });
      });
    });

  // Delete all posts
  postRouter.route('/deleteallposts')
    .delete((req, res) => {
      SetOfPosts.deleteMany((err) => {
        if (err) {
          return res.json({ success: false, message: err });
        }
        return res.json({ success: true });
      });
    });
  return postRouter;
}
module.exports = routes;
