// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    // My & Stephen's Solution 1
    // return str === str.split('').reverse().join('');

    // Stephen's Solution 2
    const splitted = str.split('');
    const length = splitted.length;
    return str.split('').every((item, index) => item === splitted[length - index - 1]);
}

module.exports = palindrome;
