//'use strict';
var express = require('express');  //webserver 
var http = require('http');
var morgan = require('morgan');   //logs server requests.
var bodyParser = require('body-parser');
var dishRouter = require('./routes/dishRouter');
var promosRouter = require('./routes/promoRouter');
var leadersRouter = require('./routes/leaderRouter');

const port = 3421; //process.env.PORT 
const hostname = 'localhost';

const app = express();
    app.use(morgan('dev'));   //for using only in development time for logging the sever requests.
    app.use(express.static(__dirname + '/public'));
    app.use(bodyParser.json());

    app.use('/dishes', dishRouter);
    app.use('/promotions', promosRouter);
    app.use('/leaders', leadersRouter);


    app.use((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body><h1>Welcome to express server</h1></body></html>');
    });


const server = http.createServer(app);

    server.listen(port, hostname, () => {
        console.log(`Server is running at http://${hostname}:${port}`);
    });
