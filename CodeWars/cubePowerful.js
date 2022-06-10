//URL--
// https://www.codewars.com/kata/59c0c5d6623654986200077b/

//INSTRUCTIONS--
/* A number n>0 is called cube-powerful if it is equal to the sum of the cubes of its digits. Write a function named isCubePowerful that return array of cube-powerful numbers below it. All inputs will be valid numbers.
*/

//SOLUTION--
/* I am going to initialize an empty array
Then I will check if each number from 1 to n  is the same when each digit is cubed
    add each number cubed and check if it is equal to the number 
        Get this by converting the number into an array of digits and reducing it
        Add the cubed value of each digit to the sum 
    if it is the same, add it to the array
return the array
*/
function isCubePowerful(n) {
    const arr = []
    for (let i = 1; i < n; i++) {
        const digitArr = [...i.toString()]
        const cubeDigitSum = digitArr.reduce((sum, value) => sum + value ** 3, 0)
        if (cubeDigitSum === i) {
            arr.push(i)
        }
    }
    return arr
}
//TESTCASES--
console.log(isCubePowerful(5), [1]);
console.log(isCubePowerful(200), [1, 153]);
console.log(isCubePowerful(372), [1, 153, 370, 371]);