//URL--
// https://www.codewars.com/kata/55f2b110f61eb01779000053

//INSTRUCTIONS--
/* Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!
Examples (a, b) --> output (explanation)

(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)


*/

//SOLUTION--
/* 
set the max to the bigger number
set the min to the smaller number
loop through the numbers from min to max
    add the number to the sum each loop
return the sum
*/
function getSum(a, b) {
    const max = Math.max(a, b)
    const min = Math.min(a, b)
    let sum = 0
    for (let i = min; i <= max; i++) {
        sum += i
    }
    return sum
}
//TESTCASES--
console.log(getSum(0, -1), -1);
console.log(getSum(0, 1), 1);
console.log(getSum(0, 3), 6);
console.log(getSum(-45, 45), 0);