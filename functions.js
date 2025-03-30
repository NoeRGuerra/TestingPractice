function capitalize(string){
    return string[0].toUpperCase() + string.slice(1);
}

function reverseString(string){
    let newString = "";
    for (let i = string.length-1; i >= 0; i--){
        newString = newString + string[i];
    }
    return newString;
}

const calculator = {
    add: (a,b) => {
        return a+b;
    },

    subtract:(a,b) => {
        return a-b;
    },

    multiply:(a,b) => {
        return a*b;
    },

    divide:(a,b) => {
        return a/b;
    }
}

function caesarCipher(string, key){
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const shiftedAlphabet = alphabet.slice(key) + alphabet.slice(0, key);
    let newString = "";

    for (let character of string){
        if (!alphabet.includes(character.toLowerCase())){
            console.log(`${character} is a special character`)
            newString = newString + character;
            continue;    
        }
        let isUpperCase = character == character.toUpperCase();
        let shiftedCharacterIndex = alphabet.match(character.toLowerCase())['index'];
        let shiftedCharacter = shiftedAlphabet[shiftedCharacterIndex];
        if (isUpperCase){
            shiftedCharacter = shiftedCharacter.toUpperCase();
        };
        console.log(`newString = ${newString} + ${shiftedCharacter};`)
        newString = newString + shiftedCharacter;
    };

    return newString;
}

function analyzeArray(array){
    return {
        average: array.reduce((accumulator, currentValue) => accumulator + currentValue) / array.length,
        min: array.reduce((a,b) => a < b ? a : b),
        max: array.reduce((a,b) => a > b ? a : b),
        length: array.length
    }
}

module.exports = { capitalize, reverseString, calculator, caesarCipher, analyzeArray}