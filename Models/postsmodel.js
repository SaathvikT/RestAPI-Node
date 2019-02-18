const mongoose = require('mongoose');

const posts = mongoose.Schema({
  title: { type: String },
  body: { type: String }
});

module.exports = mongoose.model('POSTS', posts);
