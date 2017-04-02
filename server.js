const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
var compression = require('compression');
var morgan = require('morgan');

app.use(morgan('dev'));

// compress all responses
app.use(compression());

// serve static assets normally
app.use(express.static(__dirname + '/public'));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
})

app.listen(port);
console.log("server started on port " + port);
