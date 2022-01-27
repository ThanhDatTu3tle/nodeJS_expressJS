require('dotenv').config();

// dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const csurf = require('csurf');

// routes
const userRoute = require('./routes/user.route');
const authRoute = require('./routes/auth.route');
const productRoute = require('./routes/product.route'); 
const cartRoute = require('./routes/cart.route');
const transferRoute = require('./routes/transfer.route');

// middlewares
const authMiddleware = require('./middlewares/auth.middleware');
const sessionMiddleware = require('./middlewares/session.middleware');

// port
const port = 3000;

// app
const app = express();
app.set('view engine', 'pug');
app.set('views', './views');

// use middlewares
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(sessionMiddleware);
app.use(csurf({ cookie: true }));

// use static files
app.use(express.static('public'));

// Routes, request data from resource, localhost:3000/
app.get('/', (req, res) => {
    res.render('index');
});

// use routes
app.use('/users', authMiddleware.requireAuth, userRoute);
app.use('/auth', authRoute);
app.use('/products', productRoute);
app.use('/cart', authMiddleware.requireAuth, cartRoute);
app.use('/transfer', authMiddleware.requireAuth, transferRoute);

// start server at port
app.listen(port, () => {
    console.log('Server listening port ' + port);
});