const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

const app = express();
const db = mongoose.connect('mongodb://localhost/DataAPI', { useNewUrlParser: true });
const port = process.env.PORT || 3000;

const SetOfPosts = require('./Models/postsmodel');
const setOfComments = require('./Models/commentsmodel');

const commentsRouter = require('./Routes/commentsRouter')(setOfComments);
const postRouter = require('./Routes/postRouter')(SetOfPosts);

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use('/api', postRouter, commentsRouter);

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.listen(port, () => {
  console.log(`Welcome to port ${port}`);
});
