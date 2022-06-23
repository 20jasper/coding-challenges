//URL--
// https://www.codewars.com/kata/55d24f55d7dd296eb9000030

//INSTRUCTIONS--
/* Summation

Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8


*/

//SOLUTION--
/* I am going to use the formula n(a1+an)/2 to find the sum of the numbers from 1 to n
    This can be simplified down to (n+n**2)/2
    return the result
*/
const summation = (n) => {
    return (n + n ** 2) / 2
}
//TESTCASES--
console.log(summation(1), 1)
console.log(summation(8), 36)