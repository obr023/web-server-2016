var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use('/', express.static(__dirname + '/public'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
