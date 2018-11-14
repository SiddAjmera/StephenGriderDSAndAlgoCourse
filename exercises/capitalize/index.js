// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    // My Solution 1
    // return str.split(' ').map(word =>  word.split('').map((char, index) => index === 0 ? char.toUpperCase() : char).join('')).join(' ');

    // Stephen's Solution 1
    return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

module.exports = capitalize;
