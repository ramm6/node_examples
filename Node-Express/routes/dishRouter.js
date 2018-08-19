const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();
    dishRouter.use(bodyParser.json());

    dishRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('We will send all dishes to you.!');
    })
    .post((req, res, next) => {
        res.end('We will send the dish: ' + req.body.name +
            ' with details:' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported for /dishes');
    })
    .delete((req, res, next) => {
        res.end('Deleting all the dishes..!');
    });


dishRouter.route('/:dishId')
    .get((req, res, next) => {
        res.end('We will details of dish : ' + req.params.dishId + ' to you.!');
    })
    .post((req, res, next) => {
        res.statusCode = 403; //forbidden
        res.end('POST operation not supported on /dishes/' + req.params.dishId);
    })
    .put((req, res, next) => {
        res.write('Updating the dish : ' + req.params.dishId);
        res.end('Will update the dish : ' + req.params.name + ' with details : ' + req.params.description);
    })
    .delete((req, res, next) => {
        res.end('Deleting the dish : ' + req.params.dishId);
    });

module.exports = dishRouter;