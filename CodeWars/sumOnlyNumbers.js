//URL--
// https://www.codewars.com/kata/5aecf05745e36b3788000557

//INSTRUCTIONS--
/* It has to return the sum of all numbers passed as arguments (however many are provided). If no numbers are provided as arguments it must return 0. If 1 number is provided as an argument that number must be returned. If anything other than a number is provided as one or more of the arguments, it must be ignored. Example:

sumNumbers()             // 0
sumNumbers(1, 2)         // 3
sumNumbers(4, 5, '6')    // 9


*/

//SOLUTION--
/* I am going to reduce to sum only the numbers
    If the type of the value isn't a number I won't add it 
return the sum
*/
function sumNumbers(...arguments) {
    return arguments.reduce((sum, value) => {
        if (typeof value === 'number') {
            sum += value
        }
        return sum
    }, 0)
}
//TESTCASES--
console.log(sumNumbers(), 0);
console.log(sumNumbers('symbol'), 0);
console.log(sumNumbers('something', 1, 2), 3);