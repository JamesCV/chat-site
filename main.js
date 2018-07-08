var onRequest = require(`./functions`);
var express = require('express');
var app = express();
var send404Request = require('./functions');
var messages = [];


app.get('/', onRequest);
app.listen(8888);


app.get('/postMessage', function(req, res) {
    console.log(req.query)
    messages.push(req.query);
    res.end();
  })

app.get('/getMessage', function (req, res) {
    res.end(JSON.stringify(messages));
})

console.log("Server is now running");