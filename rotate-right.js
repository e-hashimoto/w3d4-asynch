/* Rotate Right
Write a function rotateRight(array, num) that takes in an array and a number as args. The function should return a new array where the elements of the array are rotated to the right num times. The function should not mutate the original array and instead return a new array. 

Define this function using function expression syntax. 

HINT: you can use Array's slice() method to create a copy of an array
*/


/* 1. Understand the problem
take in an ARRAY and a NUMBER
number indicates how many elements on the right end of the array will move to front
new array returned so slice method can be used

*/

/* 2. Make a plan (pseudo code here)
slice num elements from end of array
slice .length - num from from front
concat them together

*/

// 3. Carry out the plan (write your code here)


function rotateRight(arr,num){
    let front = arr.slice(arr.length - num)
    let back = arr.slice(0, arr.length - num)
    //console.log("front" , front)
    //console.log("back ", back)
    return front.concat(back)
}

/*
Iterative plan, as a treat:
holding array
two mechanized loops to divide and conquer
*/

// function rotateRight(arr, num) {
//     let rotated = []
    
//     for(let i = arr.length - 1; i >= arr.length - num; i--) {
//         rotated.unshift(arr[i])
//     }

//     for(let i = 0; i < arr.length - num; i++) {
//         rotated.push(arr[i])
//     }

//     return rotated
// }



let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(rotateRight(arr, 2)); // [ 'd', 'e', 'a', 'b', 'c' ]
//console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
console.log(rotateRight(animals, 3)); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
//console.log(animals); // [ 'wombat', 'koala', 'opossum', 'kangaroo' ]