//URL--
// https://www.codewars.com/kata/581056ba36a3e5446d00007f

//INSTRUCTIONS--
/* We need a function with the following signature:

getRandomInRange(min, max)

to return a random integer based on Math.random() in the (inclusive) range of min and max.

*/

//SOLUTION--
/* 
I am going to get the number by multiplying Math.random() by the range, rounding it down, and then adding the minimum number
    Get the range by subtracting the min from one more than the max
return the resultant number
*/
function getRandomInRange(min, max) {
    const range = max - min + 1
    return Math.floor(Math.random() * range) + min
}
//TESTCASES--
console.log(getRandomInRange(1, 1), 1);
console.log(getRandomInRange(1, 3)); // 1, 2 , 3