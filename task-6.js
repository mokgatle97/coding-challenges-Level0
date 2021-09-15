'use strict'
// TASK 6
const maxNumber = function (num1, num2, num3) {
     let placeHolder = 0;
    if (num1 > num2) {
        placeHolder = num1;

    } else{
        placeHolder = num2;

    } if (num3 > placeHolder) {
        placeHolder = num3;
    }
    return `${placeHolder} is the maximum number`;
}
console.log(maxNumber(42, 26, 37))

