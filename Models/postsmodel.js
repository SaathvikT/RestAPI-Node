const mongoose = require('mongoose');

const posts = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Enter valid title']
  },
  body: {
    type: String,
    required: [true, 'Enter valid body']
  }
});

module.exports = mongoose.model('POSTS', posts);
