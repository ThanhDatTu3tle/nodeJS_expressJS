const express = require('express');
const app = express();
const port = 3000;

// request data from resource, localhost:3000/
app.get('/', (req, res) => {
    res.send('Hello Tu3tle!');
});

// request data from resource, localhost:3000/users
app.get('/users', (req, res) => {
    res.send('Hello users!');
});

// start server at port
app.listen(port, () => {
    console.log('Server listening port ' + port);
});