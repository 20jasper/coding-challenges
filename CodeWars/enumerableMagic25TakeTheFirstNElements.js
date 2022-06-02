//URL--
// https://www.codewars.com/kata/545afd0761aa4c3055001386/

//INSTRUCTIONS--
/* Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.
*/

//SOLUTION--
/* I am going to return the slice starting at 0 and ending at n
*/
function take(arr, n) {
    return arr.slice(0, n)
}
//TESTCASES--
console.log(take([0, 1, 2, 3, 5, 8, 13], 3), [0, 1, 2]);
console.log(take([55, -44,], 13), [55, -44]);