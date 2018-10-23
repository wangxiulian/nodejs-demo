#!/usr/bin/node

const http = require('http'),
      url  = require('url');

var addr = process.argv[2] || 'http://sample.wangding.in/web/one-div.html';
var options = url.parse(addr);

options.method = 'GET';
options.headers = {
  'User-Agent': '01-my-curl.js'
};

http.get(options, (res) => {
  console.log('status:', res.statusCode);
  console.log('status message:', res.statusMessage);
  console.log('HTTP version:', res.httpVersion);
  console.log('');

  console.log(res.headers);
  console.log('');

  res.pipe(process.stdout);
});
