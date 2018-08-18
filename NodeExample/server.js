var rect =  {
    area: (x, y) => x * y,
    perimeter: (x, y) => 2 * (x + y)
};

var solveRect = (x, y) => {
    if (x <= 0 || y <= 0) {
        console.log('Rectangle dimentions must be greater than zero. l = ' + x + ' and b = ' + y);
    } else {
        console.log('Rect area : ' + rect.area(x, y));
        console.log('Rect perimeter : ' + rect.perimeter(x, y));
    }
};

solveRect(2, 4);
solveRect(9, 2);
solveRect(0, 2);
solveRect('a', 1);