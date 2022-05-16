//URL--
// https://www.codewars.com/kata/5513795bd3fafb56c200049e/

//INSTRUCTIONS--
/* Create a function with two arguments that will return an array of the first (n) multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array (or list in Python, Haskell or Elixir).

Examples:

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]

*/

//SOLUTION--
/* I'm going to make an empty array 
Then I will loop n times starting at 1 and incrementing by 1 after each loop
    each loop I will add x times the current number of loops
return the resultant array
*/
// function countBy(x, n) {
//     let arr = [];
//     for (let i = 1; i <= n; i++) {
//         arr.push(x * i);
//     }
//     return arr;
// }
// function countBy(x, n) {
//     let arr = [];
//     for (let i = x; i <= n * x; i += x) {
//         arr.push(i);
//     }
//     return arr;
// }
// function countBy(x, n) {
//     let arr = [];
//     let currentNumber=x
//     while(arr.length<n){
//         arr.push(currentNumber)
//         currentNumber+=x
//     }
//     return arr;
// }
// function countBy(x, n) {
//     return Array.from({ length: n }, (element, i) => (i + 1) * x)
// }
function countBy(x, n) {
    return [...Array(n)].map((element, i) => (i + 1) * x)
}
//TESTCASES--
console.log(countBy(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(countBy(2, 5), [2, 4, 6, 8, 10]);