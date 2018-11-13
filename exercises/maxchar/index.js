// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    // My Solution 1
    // const charMap = {};
    // for(const char of str) {
    //     charMap[char] = charMap[char] + 1 || 1;
    // }
    // const occurances = Object.values(charMap);
    // const maxOccurred = occurances.indexOf(Math.max(...occurances));
    // return Object.keys(charMap)[maxOccurred];

    // Stephen's Solution 1
    const charMap = {};
    for(let char of str) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    let maxChar = 0;
    let max = '';

    for (let char in charMap) {
        if(charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
}

module.exports = maxChar;
