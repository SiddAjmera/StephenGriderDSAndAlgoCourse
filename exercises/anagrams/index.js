// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    // My and Stephen's Solution 1
    // const charMapOfStringA = getCharMap(stringA);
    // const charMapOfStringB = getCharMap(stringB);

    // if (stringA.replace(/[^\w\s]|_/g, '').length !== stringB.replace(/[^\w\s]|_/g, '').length) {
    //     return false;
    // }

    // for(let char in charMapOfStringA) {
    //     if(charMapOfStringA[char] !== charMapOfStringB[char]) {
    //         return false;
    //     }
    // }

    // return true;

    return (reduceStringToEssentials(stringA) === reduceStringToEssentials(stringB));
}

function reduceStringToEssentials(inputString) {
    return inputString.replace(/[^\w\s]|_/).toLowerCase().split('').sort().join('');
}

function getCharMap(inputString) {
    const charMapOfString = {};
    for(let char of inputString.replace(/[^\w\s]|_/g, '').toLowerCase()) {
        charMapOfString[char] = charMapOfString[char] + 1 || 1;
    }
    return charMapOfString;
}

module.exports = anagrams;
