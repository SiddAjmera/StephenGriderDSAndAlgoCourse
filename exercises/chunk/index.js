// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    // Stephen's Solution 1
    // const chunked = [];
    // array.forEach((item) => {
    //     let chunkToAddTo = chunked[chunked.length - 1];
    //     if(chunkToAddTo && chunkToAddTo.length < size) {
    //         chunkToAddTo.push(item);
    //     } else {
    //         chunked.push([item]);
    //     }
    // });
    // return chunked;

    // My Solution 1
    // const chunked = [];
    // while(array.length > 0) chunked.push(array.splice(0, size));
    // return chunked;

    // Stephen's Solution 2
    const chunked = [];
    let index = 0;
    while(index < array.length) {
        chunked.push(array.slice(index, index + size));
        index = index + size;
    }
    return chunked;
}

module.exports = chunk;
