var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.type('application/json');
  res.send(JSON.stringify({'message': 'Hello World!'}));
});

module.exports = router;
