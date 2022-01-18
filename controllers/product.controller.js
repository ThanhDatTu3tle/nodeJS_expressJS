const db = require('../db');

// index
module.exports.index = (req, res) => {
  var page = parseInt(req.query.page) || 1;
  var perPage = 8;

  var start = (page - 1) * perPage;
  var end = page * perPage;

  var maxPage = db.get('products').value().length/perPage;
  var prevPage;
  var nextPage;

  var drop = (page - 1) * perPage;

  if (req.query.page) {
    page = parseInt(req.query.page);
  }
  else {
    page = 1;
  }
    
  if (page === 1)
    { 
      prevPage = -1;
      nextPage = page + 1;
    }
  else if (page === maxPage)
    {
      prevPage = parseInt(page - 1);
      nextPage = -1;
    }
  else
    {
      prevPage = parseInt(page - 1);
      nextPage = parseInt(page + 1);
    }

  res.render('products/index', {
    products: db.get('products').drop(drop).take(perPage).value(),
    page:page,
    prevPage:prevPage,
    nextPage:nextPage  
  });
};
