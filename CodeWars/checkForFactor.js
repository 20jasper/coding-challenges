//URL--
// https://www.codewars.com/kata/55cbc3586671f6aa070000fb

//INSTRUCTIONS--
/* This function should test if the factor is a factor of base.

Return true if it is a factor or false if it is not.
About factors

Factors are numbers you can multiply together to get another number.

2 and 3 are factors of 6 because: 2 * 3 = 6

    You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
    You can use the mod operator (%) in most languages to check for a remainder

For example 2 is not a factor of 7 because: 7 % 2 = 1

Note: base is a non-negative number, factor is a positive number.

*/

//SOLUTION--
/* I am going to use the modulus operator to check if the factor is a factor of base.
*/

function isFactor(base, factor) {
    return base % factor === 0;
}

//TESTCASES--
console.log(isFactor(6, 2)); // true
console.log(isFactor(10, 5)); // false

