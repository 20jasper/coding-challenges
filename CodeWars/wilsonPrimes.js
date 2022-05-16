//URL--
// https://www.codewars.com/kata/55dc4520094bbaf50e0000cb

//INSTRUCTIONS--
/* Wilson primes satisfy the following condition. Let P represent a prime number.

Then ((P-1)! + 1) / (P * P) should give a whole number.

Your task is to create a function that returns true if the given number is a Wilson prime.

*/

//SOLUTION--
/* 
I am going to use the formula ((P-1)! + 1) / (P * P)
    I am going to calculate the factorial with a while loop that's condition is n being more than one
    I am going to initialize the factorial as 1
    in the loop, multiply the old product with the current value of n, then subtract one from n
then check if the result is a whole number
    return true if so,
    else return false
*/
function amIWilson(p) {
    let factorial = 1
    let n = p - 1
    while (n > 1) {
        factorial *= n
        n--
    }
    const result = (factorial + 1) / (p ** 2)
    return Number.isInteger(result)
}
//TESTCASES--
console.log(amIWilson(5), true);
console.log(amIWilson(9), false);
console.log(amIWilson(6), false);