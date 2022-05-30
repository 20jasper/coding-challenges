//URL--
// https://www.codewars.com/kata/546e2562b03326a88e000020

//INSTRUCTIONS--
/* Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer

*/

//SOLUTION--
/* 
I am going to conver the number to a string
Then use the spread operator to split it into an array of digits
Then use reduce to square each digit and add it to the end of the string
return the result as a number
*/
function squareDigits(num) {
    const str = num.toString()
    const arr = [...str]
    const squaredDigits = arr.reduce((str, digit) => str + (digit ** 2), '')
    return Number(squaredDigits)
}
//TESTCASES--
console.log(squareDigits(0), 0);
console.log(squareDigits(2112), 4114);
console.log(squareDigits(99), 1818);