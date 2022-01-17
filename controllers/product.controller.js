const db = require('../db');
const shortid = require('shortid');

// index
module.exports.index = (req, res) => {
  res.render('products/index', {
    products: db.get('products').value()
  });
};
