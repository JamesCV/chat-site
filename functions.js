var fs = require(`fs`);
var HTMLHeader = {'Content-Type': 'text/html'};

var onRequest = function (req, res) {
        res.writeHead(200, {"Content-Type": "Text/html"});
        fs.createReadStream("./index.html").pipe(res);    
    };
    

      

module.exports = onRequest;