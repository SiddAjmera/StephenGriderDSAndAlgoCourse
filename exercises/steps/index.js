// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stairs = '') {
    // My Solution 1
    // for(let index = 0; index < n; index++) {
    //     const result = new Array(index + 1).fill('#').concat(new Array(n - index - 1).fill(' ')).join('');
    //     console.log(result);
    // }

    // Stephen's Solution 1
    // for(let row = 0; row < n; row++) {
    //     let columns = '';
    //     for(let column = 0; column < n; column++) {
    //         columns += row >= column ?  '#' :  ' ';
    //     }
    //     console.log(columns);
    // }

    // Stephen's Solution 2
    if(row === n) return;

    if(stairs.length === n) {
        console.log(stairs);
        steps(n, row + 1);
        return;
    }

    stairs += row >= stairs.length ? '#' : ' ';
    steps(n, row, stairs);
}

module.exports = steps;
