'use strict'

const commonLetters = function (string1, string2) {
    let repeatedLetters = [];
    let s1 = string1.split('');
    let s2 = string2.split('');
    if(s1.length  > s2.length) {
        for(let i = 0; i < s1.length; i ++) {
            if(s2.includes(s1[i])){
                repeatedLetters.push(s1[i]);
            }
        }
    } else (s2.length > s1.length); {
        for(let i = 0; i < s2.length; i ++) {
            if(s1.includes(s2[i])){
                repeatedLetters.push(s2[i]);
            }
        }
    }
    return `From the 2 strings, the common letters are ${repeatedLetters.join(',')}`;
}
