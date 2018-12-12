var express = require('express');
var router = express.Router();

var User = require('../models/user');
var Nodemcu = require('../models/nodemcu_data');



router.get('/nodemcu', async function (req, res) {
    Nodemcu.find({ dataName: "temperature" }).exec(function (err, result) {
        if (err) throw err;
        return res.status(200).send(result);
    });

    

});

router.post('/nodemcu', async function (req, res) {
    let d = req.body.data
    let newdata = {
        dataName: "temperature",
        data: d,
        dateTime: new Date(new Date().toString().split('GMT')[0] + ' UTC').toISOString().split('.')[0].replace('T', ' ')
    };

    let newD = await Nodemcu.create(newdata);
    console.log(newD);

    return res.status(200).send();


});

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
