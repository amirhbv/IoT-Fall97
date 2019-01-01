var express = require('express');
var router = express.Router();

var Group = require('../models/group');
var Nodemcu = require('../models/nodemcu_data');
var config = require('../utils/config');
var bcrypt = require('bcrypt');

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
    let group_name = req.body.group_name;
    let group = await Group.findOne({ group_name });
    if (group && group.comparePassword(req.body.password)) {
        let payload = {
            group_name: group.group_name,
            thingspeak_id: group.thingspeak_id
        };
        return res.json({
            token: jwt.sign(payload,
                            config.secret,
                            { expiresIn: config.accessTokenExpireTime })
        });
    }
    else {
        return res.status(401).json({ message: 'Authentication failed. Invalid group or password.' });
    }
});

router.post('/signup', async function (req, res) {
    let group_name = req.body.group_name;
    let thingspeak_id = req.body.thingspeak_id;
    let members = req.body.members;
    let hash_password = bcrypt.hashSync(req.body.password, config.saltRounds);
    if (group_name && password) {
        let newGroup = {
            group_name,
            hash_password,
            thingspeak_id,
            members
        };
        try {
            let group = await Group.create(newGroup);
            console.log(group);
        } catch (err) {
            return res.status(500).send();
        }
        return res.status(200).send();
    }
    return res.status(400).send();
});

module.exports = router;
