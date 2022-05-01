//URL--
// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

//INSTRUCTIONS--
/* Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)


*/

//SOLUTION--
/* 
Until there is only one digit
    I am going to convert the number to a string then split the digits into an array 
    Then I will use reduce to multiply each digit together
    Then I will add one to the multiplicative persistence counter
*/
function persistence(num) {
    let multiplicativePersistence = 0
    while (String(num).length > 1) {
        num = String(num)
            .split('')
            .reduce((product, value) => product * value)

        multiplicativePersistence++
    }
    return multiplicativePersistence
}
//TESTCASES--
console.log(persistence(39), 3);
console.log(persistence(4), 0);
console.log(persistence(25), 2);