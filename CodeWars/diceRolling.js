//URL--
// https://www.codewars.com/kata/54809175ab03a2cecb000ae4

//INSTRUCTIONS--
/* Hello! Today your task is to build a basic die feature, where you will get a range in the form (min, max) - both included - and return a random number in the inclusive range.

Props if you don't use your language's random library!

dice(2, 7); // returns a value that can be 2, 3, 4, 5, 6, 7

Good luck!

*/

//SOLUTION--
/* I am going to return the random function times one more than the difference difference of the two numbers given rounded down + the smallest number
*/
function dice(minimum, maximum) {
    const difference = maximum - minimum
    const range = difference + 1
    return minimum + Math.floor(Math.random() * range)
}
//TESTCASES--
console.log(dice(1, 6), "1,2,3,4,5, or 6");
console.log(dice(1, 6), "1,2,3,4,5, or 6");
console.log(dice(1, 6), "1,2,3,4,5, or 6");
console.log(dice(1, 6), "1,2,3,4,5, or 6");
console.log(dice(1, 6), "1,2,3,4,5, or 6");
console.log(dice(1, 6), "1,2,3,4,5, or 6");
console.log(dice(1, 6), "1,2,3,4,5, or 6");
console.log(dice(1, 6), "1,2,3,4,5, or 6");
console.log(dice(1, 6), "1,2,3,4,5, or 6");
console.log(dice(1, 6), "1,2,3,4,5, or 6");
