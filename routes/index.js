var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	if (req.group) {
		console.log(req.group);
		res.render('panel/index.html', {
			group_name: req.group.group_name,
			thingspeak_id: req.group.thingspeak_id,
			members: "ali - hassan - reza - hooman!"
		});
	}
	else {
		res.redirect('/login');
	}
});

router.get('/login', function (req, res, next) {
	if (!req.group) {
		res.render('login.html');
	}
	else {
		res.redirect('/');
	}
});

router.get('/signup', function (req, res, next) {
	if (!req.group) {
		res.render('signup.html');
	}
	else {
		res.redirect('/');
	}
});

router.get('/signout', function (req, res, next) {
	if (req.group) {
		res.cookie('Authorization', '');
	}
	res.redirect('/login');
});

module.exports = router;
