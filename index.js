require('dotenv').config;

console.log(process.env.SESSION_SECRET);

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// routes
const userRoute = require('./routes/user.route');
const authRoute = require('./routes/auth.route');
const productRoute = require('./routes/product.route');

const authMiddleware = require('./middlewares/auth.middleware');

const port = 3000;

const app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(cookieParser(process.env.SESSION_SECRET));

// use static files:
app.use(express.static('public'));

// Routes, request data from resource, localhost:3000/
app.get('/', (req, res) => {
    res.render('index');
});

app.use('/users', authMiddleware.requireAuth, userRoute);
app.use('/auth', authRoute);
app.use('/products', authMiddleware.requireAuth, productRoute);

// start server at port
app.listen(port, () => {
    console.log('Server listening port ' + port);
});