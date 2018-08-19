const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = 'localhost';
const port = 3001;

const server = http.createServer((req, res) => {
    console.log('Request for ' + req.url + ' by method ' + req.method);

    if (req.method == 'GET') {

        var fileUrl;
        if (req.url == '/') {
            fileUrl = '/index.html';
        } else {
            fileUrl = req.url;
        }

        var filePath = path.resolve('./public/' + fileUrl);
        
        var fileExt = path.extname(filePath);
        if (fileExt == '.html') {
            fs.exists(filePath, (status) => {
                if (!status) {
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html');
                    res.end('<html><body><h1>404</h1></body></html>');
                } else {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/html');
                    fs.createReadStream(filePath).pipe(res);
                }
                return;
            })
        } else {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/html');
            res.end('<html><body><h1>Not Supported</h1></body></html>');
            return;
        }

    } else {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body><h1>Bad request</h1></body></html>');
        return;
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})