'use strict'

const vowels = function (string) {
    let letters = string.split('');
    let vowelLetters = [];
    for (let i = 0; i < letters.length; i++){
        if(letters[i] === 'a') {
        vowelLetters.push(letters[i]);
    } else if (letters[i] === 'e') {
        vowelLetters.push(letters[i]);
    } else if (letters[i] === 'i'){
        vowelLetters.push(letters[i]);
    } else if (letters[i] === 'o') {
        vowelLetters.push(letters[i]);
        console.log(letters);
    } else (letters[i] === 'u'); {
        vowelLetters.push(letters[i]);
        // console.log(vowelLetters);
    }
    return vowelLetters.join(', ')
    }
};

console.log(vowels('string'));
