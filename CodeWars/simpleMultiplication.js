//URL--
// https://www.codewars.com/kata/583710ccaa6717322c000105

//INSTRUCTIONS--
/* This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
*/

function simpleMultiplication(number) {
    if (number % 2 === 0) {
        return number * 8
    }
    return number * 9
}

//TESTCASES--
console.log(simpleMultiplication(2), 16, 'Should return double given argument..')
console.log(simpleMultiplication(1), 9, 'Should return double given argument..')
console.log(simpleMultiplication(8), 64, 'Should return given argument times eight...')
console.log(simpleMultiplication(4), 32, 'Should return given argument times eight...')
console.log(simpleMultiplication(5), 45, 'Should return given argument times nine...')