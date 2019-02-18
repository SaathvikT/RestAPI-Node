const express = require('express');

function routes(SetOfPosts) {
  const postRouter = express.Router();

  // Displays set of posts or post depending on the query parameter.
  postRouter.route('/posts')
    .post((req, res) => {
      const deployPost = new SetOfPosts(req.body);
      deployPost.save();
      return res.status(201).json(deployPost);
    })
    .get((req, res) => {
      SetOfPosts.find(req.query, (err, post) => {
        if (err) {
          return res.send(err);
        }
        return res.json(post);
      });
    });

  // Delete a post based upon its id.
  postRouter.route('/posts/:id')
    .delete((req, res) => {
      SetOfPosts.findByIdAndDelete(req.params.id, (err) => {
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
