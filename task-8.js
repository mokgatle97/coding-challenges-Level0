'use strict'
//TASK 0.8
const timeConversion = function(time) {
    let hours = (time/60);
    let totalHours = Math.floor(hours)
    let minutes = (hours - totalHours) * 60
    let remainingMinutes = Math.round(minutes)
    return `${time} min is ${totalHours} hour(s) and ${remainingMinutes} minute(s)!`
}

console.log(timeConversion(120))