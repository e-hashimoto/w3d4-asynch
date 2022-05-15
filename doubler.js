/* Doubler
Write a function doubler(numbers) that takes an array of numbers and returns a new array
where every element of the original array is multiplied by 2.
*/


/* 1. Understand the problem
taking in [1,2,3] 
multiply each index by 2 for entire length
no excluding conditions given
returns NEW array
*/

/* 2. Make a plan (pseudo code here)
Initialize [] as variable to .push into
multiply each element by 2 - we'll def iterate with a loop for that
using variable to store array[i](the value at each step up the index)
multply that by 2 then .push to new array variable
return finished new array after loop concludes
*/

// 3. Carry out the plan (write your code here)

function doubler(numbers) {
    let doubled = []
    for(let i = 0; i < numbers.length; i++) {
        let num = numbers[i]
        doubled.push(num * 2)
    }

    return doubled
}

console.log(doubler([1, 2, 3])); // => [2, 4, 6]


