var express = require('express');
var app = express();
var messages = [];
var fs = require(`fs`);
var messageArray = [];


app.get('/', function (req, res) {
    res.writeHead(200, {"Content-Type": "Text/html"});
    fs.createReadStream("./index.html").pipe(res);    
})
app.listen(8888);

app.get('/postMessage', function(req, res) {
    messages.push(req.query);
    var message = req.query.message;
    var name = req.query.name;
    messageArray.push(name + ": " + message);
    res.end();
  })

app.get('/getMessage', function (req, res) {
    res.end(JSON.stringify(messages));
})

console.log("Server is now running");