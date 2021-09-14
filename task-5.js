'use strict'
//TASK 0.5
const areaOfTriangle = function (side1, side2, side3) {
     let perimeter = 0.5 * (side1 + side2 + side3);
    return Math.sqrt(perimeter * (perimeter - side1) * (perimeter - side2) * (perimeter - side3));
};
