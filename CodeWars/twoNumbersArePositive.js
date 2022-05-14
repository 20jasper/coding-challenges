//URL--
// https://www.codewars.com/kata/602db3215c22df000e8544f0

//INSTRUCTIONS--
/* Task:

Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of of the three integers are positive numbers (greater than zero), and False - otherwise.
Examples:

twoArePositive(2, 4, -3) == true
twoArePositive(-4, 6, 8) == true
twoArePositive(4, -6, 9) == true
twoArePositive(-4, 6, 0) == false
twoArePositive(4, 6, 10) == false
twoArePositive(-14, -3, -4) == false

*/

//SOLUTION--
/* I am going to use reduce to count the number of positive numbers and return true if the number is two
return false
*/
function twoArePositive(...args) {
    const positiveCount = args.reduce((count, value) => {
        if (value > 0) {
            count++
        }
        return count
    }, 0)
    return positiveCount === 2
}
//TESTCASES--
console.log(twoArePositive(2, 4, -3), true);
console.log(twoArePositive(4, 6, 10), false);
console.log(twoArePositive(4, 6, 10), false);