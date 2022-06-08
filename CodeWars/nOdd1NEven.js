//URL--
// https://www.codewars.com/kata/605597f7276b220015b202cd

//INSTRUCTIONS--
/* N odd, 1/N even

Your work is to return the resulting product of n and 1/n until n reaches 1. Where n is the input of the function nole
Example Algorithms

nole(5) = 5 * 1/4 * 3 * 1/2 * 1

nole(10) = (9 * 7 * 5 * 3 * 1) / (10 * 8 * 6 * 4 * 2)
Code Examples

nole(5) # --> should be close to 1.875
nole(10) # --> should be close to 0.24609375

Notes:

    n is always positive and greater than 0
    If n is odd: multiply by n
    If n is even: multiply by 1/n or divide by n
    There's no need to trim the decimals
    Decimal precision isn't a must. The result just has to be close enough


*/

//SOLUTION--
/* I am going to use a for loop starting at 2, and ending at n
    if i is even, divide the product by n 
    if i is odd, multiply the product by n 
return the product
*/
function nole(n) {
    let product = 1
    for (let i = 2; i <= n; i++) {
        if (i % 2 === 0) {
            product /= i
        }
        else {
            product *= i
        }
    }
    return product
}
//TESTCASES--
console.log(nole(5), 1.875);
console.log(nole(10), 0.24609375);
