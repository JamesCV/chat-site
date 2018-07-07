var onRequest = require(`./functions`);
var express = require('express');
var app = express();
var send404Request = require('./functions');

if (app.get('/', onRequest)) {
    app.listen(8888);
} else {
    send404Request();
}



console.log("Server is now running");