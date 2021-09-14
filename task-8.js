'use strict'
//TASK 0.8
const timeConversion = function(time) {
//     let hours = 0;
//     let minutes = 0;
//     if (time < 60) {
//         minutes = 60 - time;
//         hours++;
//         return `${hours} and ${minutes}`
//     } else {
//         return time
//     }
// }

for (let hours = 0; hours < time; hours ++) {
    if (time < 60) {
        minutes = 60 - time;
        hours++;
        return `${hours} and ${minutes}`
    } else {
        return time
    }
}
}

console.log(timeConversion(100))
