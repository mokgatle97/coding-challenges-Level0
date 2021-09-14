'use strict'
//TASK 6
const maxNumber = function (num1, num2, num3) {
    let placeHolder = 0;
    if(num1 > num2 && num1 > num3) {
        placeHolder = num1;
    } else if (num2 > num1 && num2 > num3) {
        placeHolder = num2;
    } else (num3 > num1 && num3 > num2); {
        placeHolder = num3;
    }
    return `${placeHolder} is the maximum number`
};

console.log(maxNumber(2, 6, -1))