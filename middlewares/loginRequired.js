exports.loginRequired = function (req, res, next) {
    if (req.user) {
        return next();
    } else {
        return res.status(401).json({ message: 'Unauthorized user!' });
    }
};
