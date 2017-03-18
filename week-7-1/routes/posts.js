var express = require('express');
var router = express.Router();

var posts = [
  { id: 1, title: 'Post 1', body: 'Body 1', tags: ['tag1', 'tag2'] },
  { id: 2, title: 'Post 2', body: 'Body 2', tags: ['tag3', 'tag4'] },
  { id: 3, title: 'Post 3', body: 'Body 3', tags: ['tag5', 'tag6'] }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(posts);
});

router.post('/', function(req, res, next) {
  var post = req.body;
  post.id = posts.length;

  posts.push(req.body);

  res.sendStatus(200);
});

module.exports = router;
