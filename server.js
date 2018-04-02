var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 3000;

// Set Public Directory
app.use(express.static('public'));

// BodyParser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Home Route
app.get('/', function(req, res) {
  res.sendFile('views/index', {root: __dirname});
});

app.listen(process.env.PORT || port, function() {
  console.log('Server running on port ' + port);
});
