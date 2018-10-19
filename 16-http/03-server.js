#!/usr/bin/node
var server = require('http').createServer();

server.on('request', function (req, res) {
  console.log('REQUEST: ' + JSON.stringify(req.headers));
  req.pipe(process.stdout);
  res.end('OK! This message from http web server!');
});

server.listen(8080, function () {
  console.log('Listening on:', this.address().port);
});
