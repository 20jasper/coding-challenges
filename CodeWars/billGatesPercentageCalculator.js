//URL--
// https://www.codewars.com/kata/5861d2266d36a54f820000e6

//INSTRUCTIONS--
/* Bill Gates currently resides in Washington state as a technology advisor to the Microsoft Corporation. He didn't get to where he was without many years of practice. One of the first computer programs that Gates wrote in his youth was a calculator that calculated the percentage of a number.

As someone who is a Bill Gates enthusiast, you want to write a function to mimic this calculator. This functon should two parameters, a number and another number that the first number is a percent of. It should also return a string.

*/

//SOLUTION--
/* I am going to calculate the percentage by dividing num2 by num1 and multiplying by 100
return the percentage with '%' before is as a string
*/

function gatesCalculator(num1, num2) {
    const percentage = num1 / num2 * 100
    return `%${percentage}`
}
//TESTCASES--
console.log(gatesCalculator(5, 100), "%5");
console.log(gatesCalculator(89, 61), "%145.9016393442623");