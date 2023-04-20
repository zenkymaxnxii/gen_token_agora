const ChatTokenBuilder = require("./src/ChatTokenBuilder").ChatTokenBuilder;
const appId = "366d251855ce47eb8d387301075c279b";
const appCertificate = "e0514bcd56ed4c43842e9e1dd9b73d93";
const expirationInSeconds = 60*60*24;

const appToken = ChatTokenBuilder.buildAppToken(appId, appCertificate, expirationInSeconds)

var http = require('http');

console.log("Listen in 80...");
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write(appToken);
  res.end();
}).listen(80);