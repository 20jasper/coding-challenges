//URL--
// https://www.codewars.com/kata/5ae730e5afcba90ca1001f0c

//INSTRUCTIONS--
/* You should return the average number of the square of all even positive integers (not fractions) in the given array, rounded to the nearest integer.

e.g. for arr = [4, 5.6, -9.8, 3.14, 42, 6, 8.34] it would be [4, 42, 6], which squared is [16, 1764, 36], whose average value is 605.33, which rounded becomes 605 .

If there are no even positive integers in the array, the final result should be 0.

*/

//SOLUTION--
/* 
Set the count of positive numbers to 0
I am going to use reduce to only add even positive numbers
    Square each even positive number and add it to the sum
    add one to the count for each positive even numbers
if the count is more than 0, return the sum divided by the count rounded
else return 0
*/
function averageSquaredInt(arr) {
    let count = 0
    const sum = arr.reduce((sum, value) => {
        if (value % 2 === 0 && value > 0) {
            count++
            return sum + value ** 2
        }
        return sum
    }, 0)
    if (count > 0) {
        return Math.round(sum / count)
    }
    return 0
}

//TESTCASES--
console.log(averageSquaredInt([4, 5.6, -9.8, 3.14, 42, 6, 8.34]), 605);
console.log(averageSquaredInt([12, 51, -159.8, -3.14, 247, -6]), 144);
console.log(averageSquaredInt([-12, 51, -159.8, -3.14, 247, -6]), 0);
