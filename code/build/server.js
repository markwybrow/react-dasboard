const fs = require('fs');
const http = require('http');
const url = require('url');
const path = require('path');
const util = require('util');

'use strict';
const dir = path.dirname(fs.realpathSync(__filename));

http.createServer(function (req, res) {
  const pathname = url.parse(req.url).pathname;
  const regx = /(js|css)/g;
  let m;
  if (pathname == '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(dir + '/index.html').pipe(res);
    return;
  } else if (m = regx.exec(pathname)) {
    const filename = dir + pathname;
    const stats = fs.existsSync(filename) && fs.statSync(filename);

    if (stats && stats.isFile()) {
     // console.log("m", m);
      res.writeHead(200, {'Content-Type': m[2] === 'js' ? 'application/javascript' : 'text/css'});
      fs.createReadStream(filename).pipe(res);
      return;
    }
  }
 
  res.writeHead(404, {'Content-Type': 'text/plain'});
  res.write('404 Not Found\n');
  res.end();
}).listen(3001, 'localhost');

console.log('mark wybrow: react-app server running on localhost:3001');
