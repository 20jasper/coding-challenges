//URL--
// https://www.codewars.com/kata/5b73fb741db5cef0b0000009

//INSTRUCTIONS--
/* Multiple given x by sum of its digits.
Subtract the reversed x.

x will always be: x > 0 && x % 10 != 0 && x % 1 == 0

*/

//SOLUTION--
/* 
I am going to convert x to an array of its digits and add them to get the sum of its digits
Then I'm going to take the array of digits and reverse it to get the reversed number
Then I will return x times the sum of the digits minus the reverse number
*/
function calc(x) {
    const arr = [...x.toString()]
    const digitSum = arr.reduce((sum, value) => sum + Number(value), 0)
    const numReverse = arr.reverse().join('')
    return x * digitSum - numReverse
}
//TESTCASES--
console.log(calc(4), 12);
console.log(calc(21), 51);
console.log(calc(543), 6171);