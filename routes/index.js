var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('panel/index.html', { username: 'MohsenFayyaz'});
});

router.get('/dashboard', function (req, res, next) {
  res.render('dashboard.html');
});

module.exports = router;
