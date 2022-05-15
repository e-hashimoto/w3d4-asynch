
/* Pairs Maker
Write a function pairsMaker(arr) that takes in a an array as an argument. The function should return a 2D array where the subarrays represent unique pairs of element from the input array.
*/


/* 1. Understand the problem
take in SINGLE array
pushing arrays of unique pairs into holding array
returning created 2D array
*/

/* 2. Make a plan (pseudo code here)
initiate empty array to push pairs to
using nested loop to create pairs
starting j-loop's index at +1 of wherever the i-loop's index is(starts 0)
i-loop doesn't need cycle to with last index(all pairs will exist)
*/

// 3. Carry out the plan (write your code here)

let pairsMaker = function(arr) {
    let nest = []

    for(let i = 0; i < arr.length; i++) {
        let outer = arr[i]
        for(let j = i + 1; j < arr.length; j++) {
            let inner = arr[j]
            let nested = [outer, inner]
            nest.push(nested)
        }
    }

    return nest
}


console.log(pairsMaker(['a', 'b', 'c', 'd'])); // =>
// [ [ 'a', 'b' ],
//   [ 'a', 'c' ],
//   [ 'a', 'd' ],
//   [ 'b', 'c' ],
//   [ 'b', 'd' ],
//   [ 'c', 'd' ] ]

console.log(pairsMaker(['Rosemary', 'Alex', 'Connor'])); // =>
// [ [ 'Rosemary', 'Alex' ],
//   [ 'Rosemary', 'Connor' ],
//   [ 'Alex', 'Connor' ] ]