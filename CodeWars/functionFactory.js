//URL--
// https://www.codewars.com/kata/5963a97e33b908c26400000c/

//INSTRUCTIONS--
/* As a programmer, you get paid for writing code. You are basically a code factory - money in, code out.

But as a programmer you are also quite lazy.

One day you decide that you want to create a program that does your job for you, so you can go online and solve more Katas on Codewars.

Create a function functionFactory that takes three parameters (x, y, operator) and returns the function that can calculate the result.

*/

//SOLUTION--
/* I am going to use a the function constructor with a template literal inside of it
    It will have "return" followed by the values of x, the operator and y
return the function
*/
function functionFactory(x, y, operator) {
    return Function(`return ${x}${operator}${y}`)
}

//TESTCASES--
console.log(functionFactory(2, 3, '+')(), 5);
console.log(functionFactory(1, 1, '-')(), 0);
console.log(functionFactory(12, 10, '*')(), 120);
console.log(functionFactory(24, 12, '/')(), 2);