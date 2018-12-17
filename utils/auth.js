var jwt = require('jsonwebtoken');
var config = require('./config');

exports.createAccessToken = async function (user) {
  let accessToken = await jwt.sign(
    {
      username: user.username
    },
    config.secret,
    { expiresIn: config.accessTokenExpireTime }
  );
  return accessToken;
};

exports.validateToken = async function (token) {
  return jwt.verify(token, config.secret);
};

exports.decodeToken = async function (token) {
  return jwt.decode(token);
};
