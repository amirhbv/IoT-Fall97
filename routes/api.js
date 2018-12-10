var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.post('/login', async function (req, res) {
    let username = req.body.username;
    let user = await User.findOne({ username: username });
    if (user) {
        let password = req.body.password;
        if (user.password == password) {
            return res.status(200).send();
        }
        else {
            return res.status(401).send();
        }
    }
    else {
        return res.status(401).send();
    }
});

router.post('/signup', async function (req, res) {
    let username = req.body.username;
    let password = req.body.password;
    if (username && password) {
        let newUser = {
            username: username,
            password: password
        };
        try {
            let user = await User.create(newUser);
            console.log(user);
        } catch (err) {
            return res.status(500).send();
        }
        return res.status(200).send();
    }
    return res.status(400).send();
});

module.exports = router;
