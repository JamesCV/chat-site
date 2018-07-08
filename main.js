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
    var counter = (messages.length - 1);
    var newestMsg = getMsg(counter);
    messageArray.push(newestMsg);
    console.log(newestMsg);
    res.end();
  })

app.get('/getMessage', function (req, res) {
    res.end(JSON.stringify(messageArray));
})



var getMsg = function (item) {
    var rawDate = messages[item];
    var data = JSON.stringify(rawDate);
    var curItem = data.split('"message":"')[1];
    var dataItem = curItem.split('"}')[0];
    return dataItem;
}



console.log("Server is now running");