'use strict'

const vowels = function (string) {
    let letters = string.split('');
    let lettersCount = [];
    let vowelLetters = ['a', 'e','i','o','u', 'A','E', 'I', 'O', 'U'];
    for (let i = 0; i < letters.length; i++){
        if(vowelLetters.includes(letters[i])) {
        lettersCount.push(letters[i]);
     }
    }
    return lettersCount.join(', ');
};

