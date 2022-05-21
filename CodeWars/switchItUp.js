//URL--
// https://www.codewars.com/kata/5808dcb8f0ed42ae34000031/

//INSTRUCTIONS--
/* When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".
*/

//SOLUTION--
/* I'm going to make an array of each number ord spelled out at the the index of each number and then return the index  of the input in the array
*/
let switchItUp = (number) => ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"][number]
//TESTCASES--
console.log(switchItUp(1), "One");
console.log(switchItUp(2), "Two");
console.log(switchItUp(5), "Five");