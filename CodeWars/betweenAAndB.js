//URL--
// https://www.codewars.com/kata/572f85cdd59ee794c30010cf

//INSTRUCTIONS--
/* Return product of numbers between a and b (both non-negative). If it's impossible then return 'Error' in JavaScript or throw an exception in C#.

For example:

product(2,5) => 3 * 4 = 12
product(5,2) => 'Error' / Exception


*/

//SOLUTION--
/* If b-a-1 is less than one, return 'Error'
Otherwise, make an array of integers starting at a+1 and ending at b-1and multiply all of the values
return the result
*/
function product(start, end) {
    const length = end - start - 1
    if (length < 1) {
        return 'Error'
    }
    return Array
        .from({ length: length }, (v, i) => i + start + 1)
        .reduce((product, value) => product * value, 1)
}
//TESTCASES--
console.log(product(2, 6), 60);
console.log(product(2, 4), 3);
console.log(product(3, 0), 'Error');
console.log(product(3, 1), 'Error');