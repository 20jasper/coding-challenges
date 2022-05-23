//URL--
// https://www.codewars.com/kata/58cb43f4256836ed95000f97

//INSTRUCTIONS--
/* In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

Your function will be tested with pre-made examples as well as random ones.

If you can, try writing it in one line of code.

*/

//SOLUTION--
/* I am going to make a function that gets the volume of each array by multiplying each of its elements
Then I will return the absolute value of the difference of the volumes
*/
function findDifference(a, b) {
    return Math.abs(getVolume(a) - getVolume(b))
}
function getVolume(arr) {
    return arr.reduce((product, value) => product * value, 1)
}
//TESTCASES--
console.log(findDifference([3, 2, 5], [1, 4, 4]), 14);
console.log(findDifference([9, 7, 2], [5, 2, 2]), 106);
console.log(findDifference([11, 2, 5], [1, 10, 8]), 30);