/* Vowel Counter (*)
Write a function, countVowels(word), that takes in a string word and returns the number of vowels in the word. 
Vowels are the letters "a", "e", "i", "o", "u".
*/


/* 1. Understand the problem
takes in a SINGLE word
identifies vowels within the word
keeps a count of the vowels
returns vowel count after iterating through word
*/

/* 2. Make a plan (pseudo code here)
make count variable to return outside loop
store list of vowels in a string to use with .includes
iterate word length
if vowels.includes(word[i]) add 1 to count
after loop finished, return count variable
*/

// 3. Carry out the plan (write your code here)

function countVowels(word) {
    let count = 0
    let vowels = "aeiou"
    for(let i = 0; i < word.length; i++){
        let letter
        if (vowels.includes(word[i])) count++
    }
    return count
  };
  
  console.log(countVowels("bootcamp")); // => 3
  console.log(countVowels("apple")); // => 2
  console.log(countVowels("pizza")); // => 2