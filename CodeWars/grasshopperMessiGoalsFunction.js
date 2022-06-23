//URL--
// https://www.codewars.com/kata/55f73be6e12baaa5900000d4

//INSTRUCTIONS--
/* Messi goals function

Messi is a soccer player with goals in three leagues:

    LaLiga
    Copa del Rey
    Champions

Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.

For example:

5, 10, 2  -->  17


*/

//SOLUTION--
/* I am going to put the arguments in an array and use reduce to add them up
*/
function goals() {
    return [...arguments].reduce((a, b) => a + b, 0)
}
//TESTCASES--
console.log(goals(0, 0, 0), 0)
console.log(goals(43, 10, 5), 58)