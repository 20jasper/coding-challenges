//URL--
// https://www.codewars.com/kata/584ae59dedecf5b9410000ed

//INSTRUCTIONS--
/* Task

Given an array of numbers, work out the Nth term of the sequence and return it as a String in the form an + b.
Input

    All arrays provided will consist of 5 elements
    Every array will be a sequence
    All sequences provided will be linear
    All sequences will start with the first element being n = 1

Examples

    [1, 3, 5, 7, 9] should return 2n + -1
    [1, 5, 9, 13, 17] should return 4n + -3
    [11, 16, 21, 26, 31] should return 5n + 6

Note

    When returning the answer, ensure that it is in the form an + b - if b is negative then it should be an + -b and not an - b.


*/

//SOLUTION--
/* I am going to get a by subtracting the first term from the second
I am going to get b by subtracting a from the first term
return the values in a template literal like this `${a}n + ${b}`
*/
function nthTermOf(sequence) {
    const a = sequence[1] - sequence[0]
    const b = sequence[0] - a
    return `${a}n + ${b}`
}
//TESTCASES--
console.log(nthTermOf([3, 5, 7, 9, 11]), "2n + 1");
console.log(nthTermOf([-6, -11, -16, -21, -26]), "-5n + -1");
console.log(nthTermOf([0, 0, 0, 0, 0]), "0n + 0");