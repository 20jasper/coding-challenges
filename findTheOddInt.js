//URL--
// https://www.codewars.com/kata/54da5a58ea159efa38000836

//INSTRUCTIONS--
/* Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
Examples

[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

*/

//SOLUTION--
/* I am going to use the reduce method to make an object where the properties are each number, and the values are how many time each number appears in the array
If the number does not exist as a property in the object yet, set its value to 1
Otherwise, add 1 to the current value of the property
Then I will check each property until I find an odd value

I forgot to convert the final value to a number, so I used the unary plus to do so
*/
function findOdd(A) {
    const newObj = {}
    A.reduce((obj, item) => {
        if (newObj[item]) {
            newObj[item]++
        } else {
            newObj[item] = 1
        }
        return newObj
    }, {})
    for (const property in newObj) {
        if (newObj[property] % 2 != 0) {
            return +property
        }
    }
}
//TESTCASES--
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]), 5);
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]), -1);
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]), 5);
console.log(findOdd([10]), 10);