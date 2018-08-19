var rect = require('./rect');
var solveRect = (x, y) => {
    rect(x, y, (err, rectangle) => {
        if (err) {
            console.log('ERROR: ' + err.message);
        } else {
            console.log('Rect area : ' + rectangle.area());
            console.log('Rect perimeter : ' + rectangle.perimeter());
        }
    });

    console.log('This is after rectangle call');

};

solveRect(2, 4);
solveRect(9, 2);
solveRect(0, 2);
solveRect('a', 1);