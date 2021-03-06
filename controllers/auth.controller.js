const db = require('../db');

// login
module.exports.login = (req, res) => {
  res.render('auth/login');
};

// postLogin
module.exports.postLogin = (req, res) => {
  var email = req.body.email;
  var password = req.body.password;

  var user = db.get('users').find({ email: email }).value();

  if (!user) {
    res.render('auth/login', {
      errors: [
        'User does not exist!'
      ],
      values: req.body
    });

    return;
  }

  if (user.password !== password) {
    res.render('auth/login', {
      errors: [
        'Wrong password!'
      ],
      values: req.body
    });

    return;
  }

  res.cookie('userId', user.id, {
    signed: true
  });
  res.redirect('/users');
};

// logout
module.exports.logout = (req, res) => {
  res.clearCookie('userId');
  res.redirect('/');
};
