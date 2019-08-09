var express = require('express');
var models = require('../models');
var router = express.Router();

/* GET posts. */
router.get('/', function(req, res) {
  res.type('application/json');

  models.Post.findAll({ raw : true }).then(posts => {
    res.send(posts);
  });
});

module.exports = router;
