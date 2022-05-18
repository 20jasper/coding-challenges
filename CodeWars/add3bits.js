//URL--
// https://www.codewars.com/kata/5985812e8fb36185c1000063

//INSTRUCTIONS--
/* Knowning that the first 4 decimal numbers 0, 1, 2, 3 are represented in binary format as 00, 01, 10, 11, you've been asked to create a function that add three bits. Notice that you have to validate the input. In that case, return null (in JS) or None in Python).

Note :

    only 0 or 1 are valid inputs

Input

Three numbers that represent bit values.
Output

An array of two elements containing the result. In the case where any of the arguments provided are invalid, return null/None instead.
Examples

add3bits(0, 0, 0) // => [0, 0]
add3bits(1, 0, 1) // => [1, 0]
add3bits(1, "Hello World", true); // => null

*/

//SOLUTION--
/* if any argument is 0, return null
else, add each bit
convert it to binary and pad the start if it is shorter than 2 digits
Then I'll split the string into an array and convert each element to a number
*/
function add3bits(x, y, z) {
    const validInputs = [0, 1]
    if (!(validInputs.includes(y) && validInputs.includes(z) && validInputs.includes(x))) {
        return null
    }
    const binarySum = (x + y + z).toString(2).padStart(2, '0')
    return [...binarySum].map(Number)
}
//TESTCASES--
console.log(add3bits(0, 0, 0), [0, 0]);
console.log(add3bits(1, 0, 1), [1, 0]);
console.log(add3bits(1, 'Hello World', true), null);