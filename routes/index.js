var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('panel/index.html', { username: 'MohsenFayyaz'});
});

router.get('/login', function (req, res, next) {
  res.render('login.html');
});

module.exports = router;
