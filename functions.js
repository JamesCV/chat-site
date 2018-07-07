var fs = require(`fs`);
var HTMLHeader = {"Content-Type": "Text/html"};

var onRequest = function (req, res) {
        res.writeHead(200, HTMLHeader);
        fs.createReadStream("./index.html").pipe(res);    
    };

var send404Request = function (req, res){
    res.writeHead(404, HTMLHeader);
    res.write("Page doesn't exist dumbass");
}


module.exports = send404Request;
module.exports = onRequest;