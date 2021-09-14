'use strict'

//Task 0.1
let x = 0;
let y = 1;
console.log(x);
console.log(y);
x = x + 3;
y = y + x;
console.log(x);
console.log(y);

// Task 0.2
let x = 1 +1 * 2;
let y = (1 + 1) * 2;
let z = 1 + (1 * 2);
let a = 1 + 1 * 2 / 2;
let b = (1 + 1 * 2) / 2;

console.log(x, y, z, a, b);

// Task 0.3
const hello = function (name) {
    return `Hello ${name}!`;
}; 

// Task 0.4
const evenOrOdd = function (integer) {
    if(Number(integer) % 2 == 0) {
        return `${integer} is even!`
    }else {
        return `${integer} is odd!`
    }
};

//Task 0.5
const areaOfTriangle = function (side1, side2, side3) {
    let semiPerimeter = 1/2 * (side1 + side2 + side3);
    return Math.sqrt(semiPerimeter * (semiPerimeter - side1) * (semiPerimeter - side2) * (semiPerimeter - side3));
};
// ||
//Task 0.6
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

// Task 0.7
const tempInFahrenheit = function (celsius){
    return (celsius * 1.8) + 32
};

const tempInCelsius = function (fahrenheit) {
    return 5/9 * (fahrenheit - 32)
};

//Task 0.8
const timeConversion = function (time) {

    // create a loop to go through the time parameter to ensure hours are clocked in
    let hours = 0;
    let min = 0;
    if(time > 60){
        hours ++;
    }
}

// Task 0.9
// Need  to tinker on this for a bit
const vowels = function(string) {
    for (let i = 0; i < string.length; i ++) {
        if(string[i] === 'a' || 'e' || 'i' || 'o' || 'u'){
            return string[i]
        }
    }
}

// Task 0.10
const commonLetters = function (string1, string2) {

}