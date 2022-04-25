//URL--
// https://www.codewars.com/kata/5526fc09a1bbd946250002dc

//INSTRUCTIONS--
/* You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
Examples

[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)


*/

//SOLUTION--
/* I am going to check if the first 3 elements in the array are even or odd
If there are more odds than evens, Then I will iterate through the array until I find an even value and return it
If there are more evens than odds, Then I will iterate through the array until I find an odd value and return it
*/
function findOutlier(integers) {
    let odds = 0
    let evens = 0
    for (let i = 0; i <= 2; i++) {
        if (integers[i] % 2 != 0) {
            odds++
        } else {
            evens++
        }
    }
    if (odds > evens) {
        for (let i = 0; i < integers.length; i++) {
            if (integers[i] % 2 == 0) {
                return integers[i]
            }
        }
    }
    for (let i = 0; i < integers.length; i++) {
        if (integers[i] % 2 != 0) {
            return integers[i]
        }
    }
}

//TESTCASES--
console.log(findOutlier([0, 1, 2]), 1);
console.log(findOutlier([1, 2, 3]), 2);
console.log(findOutlier([2, 6, 8, 10, 3]), 3);
console.log(findOutlier([1, 1, 0, 1, 1]), 0);