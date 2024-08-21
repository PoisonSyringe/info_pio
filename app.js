var express = require('express');
var path = require('path');
var app = express();



app.use(express.static(path.join(__dirname, '')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'revista_digital_6d.html'));
});

app.get(function(error, req, res, next) {
  res.status(error.status || 500);
  res.send("error");
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
