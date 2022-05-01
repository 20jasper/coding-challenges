//URL--
// https://www.codewars.com/kata/585d7d5adb20cf33cb000235

//INSTRUCTIONS--
/* There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.
*/

//SOLUTION--
/* I am going to check to see if the first, last, and current index of a given number are the same
If so, I will return that number
*/
function findUniq(arr) {
    let uniqueNumber;
    arr.forEach((num, i, arr) => {
        if (i == arr.indexOf(num) && i == arr.lastIndexOf(num)) {
            uniqueNumber = num
        }
    });
    return uniqueNumber
}

//TESTCASES--
console.log(findUniq([1, 0, 0]), 1);
console.log(findUniq([0, 1, 0]), 1);
console.log(findUniq([1, 1, 2, 1, 1]), 2);
console.log(findUniq([3, 10, 3, 3, 3]), 10);