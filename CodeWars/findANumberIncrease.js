//URL--
// https://www.codewars.com/kata/5934ef21b2defb45df000026

//INSTRUCTIONS--
/* A number increased by 7 equals 22. Write a function that return A number's value. Return null if initial_value or final_value is not a number and when final_value is less than initial_value.
*/

//SOLUTION--
/* I am going to check if the two inputs are numbers
    If not, return null
If final_value - initial_value is negative, return null
Else return the result
*/
function increaseNumber(initialValue, finalValue) {
    if (typeof initialValue !== "number" || typeof finalValue !== "number") {
        return null
    }
    const value = finalValue - initialValue
    if (value < 0) {
        return null
    }
    return value
}
//TESTCASES--
console.log(increaseNumber(7, 22), 15);
console.log(increaseNumber(12, 34), 22);
console.log(increaseNumber('12', 34), null);
console.log(increaseNumber(70, 22), null);