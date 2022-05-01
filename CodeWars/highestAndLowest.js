//URL--
// https://www.codewars.com/kata/554b4ac871d6813a03000035

//INSTRUCTIONS--
/* In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
Examples

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

Notes

    All numbers are valid Int32, no need to validate them.
    There will always be at least one number in the input string.
    Output string must be two numbers separated by a single space, and highest number is first.


*/

//SOLUTION--
/* I am going to find the max with Math.max() and the min with Math.min and then return them with a template literal

I forgot to split the string into an array before finding the max
*/
function highAndLow(numbers) {
    const arr = numbers.split(' ')
    return `${Math.max(...arr)} ${Math.min(...arr)}`
}
//TESTCASES--
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");
console.log(highAndLow("1 2 3"), "3 1");