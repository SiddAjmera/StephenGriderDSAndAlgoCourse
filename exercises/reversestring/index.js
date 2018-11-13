// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // My Solution 1
    // const splittedString = str.split('');
    // const totalLength = splittedString.length;
    // return splittedString.map((item, index) => splittedString[totalLength - index - 1]).join('');

    // My Solution 2
    // const splittedString = str.split('');
    // const totalLength = splittedString.length;
    // let index = 0;
    // const reverstedStringArray = [];
    // while(index < totalLength ) {
    //     reverstedStringArray.push(splittedString.pop());
    //     index++;
    // }
    // return reverstedStringArray.join('');

    // Stephen's Solution 1
    return str.split('').reverse().join('');

    // Stephen's Solution 2
    // let reversed = '';
    // for(const character of str) {
    //     reversed = character + reversed;
    // }
    // return reversed;
    
    // Stephen's Solution 3
    // return str.split('').reduce((accumulator, item) => item + accumulator, '');
}

module.exports = reverse;
