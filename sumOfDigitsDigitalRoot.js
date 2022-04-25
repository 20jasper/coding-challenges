//URL--
// https://www.codewars.com/kata/541c8630095125aba6000c00

//INSTRUCTIONS--
/* Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
Examples

    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2


*/

//SOLUTION--
/* while the length of the number converted to a string is more than one, add up all of its digits by converting the number into a string and splitting it into an array with the spread operator and using reduce to sum all of its digits
*/
function digital_root(n) {
    const string = n.toString()
    const arr = [...string]
    if (string.length > 1) {
        const sum = arr.reduce((sum, value) => sum + Number(value), 0)
        return digital_root(sum)
    }
    return n
}
//TESTCASES--
console.log(digital_root(16), 7);
console.log(digital_root(456), 6);
console.log(digital_root(7), 7);
console.log(digital_root(754546), 4);