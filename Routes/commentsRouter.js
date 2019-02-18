/* eslint-disable no-param-reassign */
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
  commentsRouter.route('/comments/:id')
    .put((req, res) => {
      setOfComments.findById(req.params.id, (err, comment) => {
        if (err) {
          return res.send(err);
        }
        comment.postId = req.body.postId;
        comment.name = req.body.name;
        comment.email = req.body.email;
        comment.body = req.body.body;
        comment.save();
        return res.json(comment);
      });
    });
  return commentsRouter;
}
module.exports = routes;
