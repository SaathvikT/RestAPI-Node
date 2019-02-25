/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const express = require('express');

// Get comments based  on postId passed as parameter.
function routes(setOfComments) {
  const commentsRouter = express.Router();
  commentsRouter.route('/comments/:postId')
    .get((req, res) => {
      setOfComments.find({ postId: req.params.postId }, (err, comment) => {
        if (err) {
          return res.send(err);
        }
        return res.json(comment);
      });
    });
  commentsRouter.route('/comments')
    .post((req, res) => {
      setOfComments.findById(req.body._id, (err, comment) => {
        if (err) {
          return res.send(err);
        }
        comment.postId = req.body.title;
        comment.name = req.body.name;
        comment.email = req.body.email;
        comment.body = req.body.body;
        comment.save();
        return res.json({ message: 'success' });
      });
    });
  return commentsRouter;
}
module.exports = routes;
