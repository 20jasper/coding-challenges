//URL--
// https://www.codewars.com/kata/526571aae218b8ee490006f4

//INSTRUCTIONS--
/* Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

*/

//SOLUTION--
/* I am going to use toString with a radix of 2
Then I will convert it to a string and filter it to get rid of the zeros and return the number of 0s
*/
const countBits = function (n) {
    const binaryString = n.toString(2)
    return [...binaryString]
        .filter(x => x == 1)
        .length
};
//TESTCASES--
console.log(countBits(0), 0);
console.log(countBits(4), 1);
console.log(countBits(10), 2);
console.log(countBits(1234), 5);