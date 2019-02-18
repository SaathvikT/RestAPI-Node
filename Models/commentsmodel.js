const mongoose = require('mongoose');

const comments = mongoose.Schema({
  postId: { type: Number },
  name: { type: String },
  email: { type: String },
  body: { type: String }
});

module.exports = mongoose.model('COMMENTS', comments);
