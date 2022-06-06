//URL--
// https://www.codewars.com/kata/59ddf33c11bea79880000fab

//INSTRUCTIONS--
/* An Armstrong number is a number such that the sum of its digits raised to the third power is equal to the number itself. For example, 371 is an Armstrong number, since 3^3 + 7^3 + 1^3 = 371. It should return false if empty string or string is passed. It should return false for negative numbers as well.

When you pass 0 or 1 , it should return true.

*/

//SOLUTION--
/* 
If the input is a string, return false
If the number is less than one, return false
Return false if the number is not an integer
Else, add each number cubed and check if it is equal to the number 
    Get this by converting the number into an array of digits and reducing it
        Add the cubed value of each digit to the sum 
return the truth value
*/
function armstrong(num) {
    if (typeof num === "string") {
        return false
    }
    if (num < 0 || !Number.isInteger(num)) {
        return false
    }
    const digitArr = [...num.toString()]
    const cubeDigitSum = digitArr.reduce((sum, value) => sum + value ** 3, 0)
    return cubeDigitSum === num
}
//TESTCASES--
console.log(armstrong(0), true);
console.log(armstrong(1), true);
console.log(armstrong(371), true);
console.log(armstrong(9), false);
console.log(armstrong(12), false);
console.log(armstrong(-12), false);
console.log(armstrong('-12'), false);
console.log(armstrong(1.5), false);