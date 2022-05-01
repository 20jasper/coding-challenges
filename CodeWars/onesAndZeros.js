//URL--
// https://www.codewars.com/kata/578553c3a1b8d5c40300037c

//INSTRUCTIONS--
/* Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
*/

//SOLUTION--
/* I am going to join the array into a string then convert it to a number
Then I will use the parseInt method with a radix of 2 to convert it to decimal
*/
const binaryArrayToNumber = arr => {
    const string = arr.join('')
    return parseInt(string, 2)
};
//TESTCASES--
console.log(binaryArrayToNumber([0, 0, 0, 1]), 1);
console.log(binaryArrayToNumber([1, 1, 1, 1]), 15);
console.log(binaryArrayToNumber([0, 1, 1, 0]), 6);