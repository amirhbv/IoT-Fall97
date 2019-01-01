var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	if (req.user) {
		res.render('panel/index.html', { username: user.username });
	}
	else {
		res.redirect('/login');
	}
});

router.get('/login', function (req, res, next) {
	if (!req.user) {
		res.render('login.html');
	}
	else {
		res.redirect('/');
	}
});

router.get('/signup', function (req, res, next) {
	if (!req.user) {
		res.render('signup.html');
	}
	else {
		res.redirect('/');
	}
});

module.exports = router;
