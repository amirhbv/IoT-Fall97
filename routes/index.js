var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('panel/index.html', { username: 'MohsenFayyaz'});
});

router.get('/login', function (req, res, next) {
  res.render('login.html');
});

router.get('/signup', function (req, res, next) {
  res.render('signup.html');
});

module.exports = router;
