const express = require('express');
const bodyParser = require('body-parser');

const userRoute = require('./routes/user.route');

const port = 3000;

const app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static('public'));

// Routes, request data from resource, localhost:3000/
app.get('/', (req, res) => {
    res.render('index');
});

app.use('/users', userRoute);

// start server at port
app.listen(port, () => {
    console.log('Server listening port ' + port);
});