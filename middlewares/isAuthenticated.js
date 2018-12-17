var auth = require('../utils/auth');

module.exports = async function (req, res, next) {
  let token = req.headers.authorization;
  if (token === '') {
    return res.status(401).send();
  }
  let isValid;

  try {
    isValid = await auth.validateToken(token);
    req.username = isValid.username;
    return next();
  } catch (error) {
    return res.status(401).send();
  }
};
