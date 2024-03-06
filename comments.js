// Create web server
// Create a web server that listens on port 3000 and returns the comments array as a JSON response.

var http = require('http');
var comments = require('./comments');

var server = http.createServer(function(request, response) {
  response.writeHead(200, {
    'Content-Type': 'application/json'
  });
  response.write(JSON.stringify(comments));
  response.end();
});

server.listen(3000);