const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

const app = express();
const db = mongoose.connect('mongodb://localhost/DataAPI', { useNewUrlParser: true });
const port = process.env.PORT || 3000;

const SetOfPosts = require('./models/postsmodel');
const setOfComments = require('./models/commentsmodel');

const commentsRouter = require('./routes/commentsRouter')(setOfComments);
const postRouter = require('./routes/postRouter')(SetOfPosts);

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api', postRouter, commentsRouter);


app.get('/', (req, res) => {
  res.sendFile('./html/index.html', { root: __dirname });
});

app.listen(port, () => {
  console.log(`Welcome to port ${port}`);
});
