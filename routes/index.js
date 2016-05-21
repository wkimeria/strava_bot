var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Help information */
router.post('/help', function(req, res, next){
  res.json({"foo": "bar"});
});

module.exports = router;
