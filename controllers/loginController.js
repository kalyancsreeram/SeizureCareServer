const User = require("../models/user");

exports.getLoginUser = (req, res, next) => {
    res.send(User.fetchUserName());
}

exports.postLoginUser = (req, res, next) => {
    const user = new User(req.body.username);
    user.save();
    res.redirect('/');
}