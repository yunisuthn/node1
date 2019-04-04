const express = require('express');
const path = require('path');

const app = express();

require('./Route/route')(app);

const port = process.env.PORT || 8080;
app.listen(port);

console.log('App is listening on port ' + port);

// var express = require('express');

// var app = express();
// require('./Route/route')(app);


// const port = process.env.PORT || 8080;
// app.listen(port)
// console.log('Server demarer ' + port);