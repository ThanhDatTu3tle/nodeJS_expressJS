const db = require('../db');

// index
module.exports.index = (req, res) => {
  var page = parseInt(req.query.page) || 1;
  var perPage = 8;

  var maxPage = db.get('products').value().length/perPage;
  var prevPage;
  var nextPage;

  var drop = (page - 1) * perPage;

  res.render('cart/index', {
    products: db.get('products').drop(drop).take(perPage).value()
  });
};

module.exports.addToCart = (req, res, next) => {
  const productId = req.params.productId;
  const sessionId = req.signedCookies.sessionId;

  if (!sessionId) {
    res.redirect('/products');
    return;
  }

  const count = db.get('sessions').find({ id: sessionId }).get('cart.' + productId, 0).value();

  db.get('sessions').find({ id: sessionId }).set('cart.' + productId, count + 1).write();

  res.redirect('/products');
}