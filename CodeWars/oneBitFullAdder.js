//URL--
// https://www.codewars.com/kata/605793c11114e70023301e91/

//INSTRUCTIONS--
/* Definition:

A full adder adds binary numbers and accounts for values carried in as well as out. A one-bit full-adder adds three one-bit numbers, often written as A, B, and Cin; A and B are the operands, and Cin is a bit carried in from the previous less-significant stage.

source
Your task:

Write a function that will return both the carry-out's value and the sum of an addition operation.
Input :

A carry-in bit and two bits to be added, being integers 0 or 1.
Output :

An array (tuple in Python) containing, in this order, the carry-out bit and the result bit of the addition.

*/

//SOLUTION--
/* I am going to add up the inputs then use to string with a radix of 2 to convert it to binary
Then I will pad the start until it is 2 characters with a '0'
Then split it into an array of digits and convert the digits to numbers
return the resultant array
*/
function oneBitFullAdder(cin, a, b) {
    const binarySum = (cin + a + b).toString(2).padStart(2, '0')
    return [...binarySum].map(x => Number(x))
}
//TESTCASES--
console.log(oneBitFullAdder(0, 0, 0), [0, 0]);
console.log(oneBitFullAdder(0, 0, 1), [0, 1]);
console.log(oneBitFullAdder(0, 1, 1), [1, 0]);
