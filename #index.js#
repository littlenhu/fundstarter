var http = require("http");
var fs =require("fs");
var data = fs.readFileSync('index.html');
//web server object
http.createServer(function (request, response) {
response.writeHead(200, {
'Content-Type': 'text/html'
});
response.write(data);
response.end();
}).listen(8080);
