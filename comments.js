// Create web server
// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
var qs = require('querystring');
var comments = [];
var filePath = path.join(__dirname, 'comments.json');

// Load the fs module to read the JSON file that contains comments.
fs.readFile(filePath, 'utf8', function(err, data) {
  if (err) {
    console.log(err);
  } else {
    comments = JSON.parse(data);
  }
});

// Create a server that responds to requests.
http.createServer(function (request, response) {
  var urlObj = url.parse(request.url, true);
  var pathname = urlObj.pathname;
  var query = urlObj.query;
  var method = request.method;
  var comment = ''