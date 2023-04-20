const ChatTokenBuilder = require("./src/ChatTokenBuilder").ChatTokenBuilder;
const appId = "970CA35de60c44645bbae8a215061b33";
const appCertificate = "5CFd2fd1755d40ecb72977518be15d3b";
const expirationInSeconds = 60*60*24;

const appToken = ChatTokenBuilder.buildAppToken(appId, appCertificate, expirationInSeconds)

var http = require('http');

console.log("Listen in 8080...");
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write(appToken);
  res.end();
}).listen(8080);