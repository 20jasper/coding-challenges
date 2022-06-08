//URL--
// https://www.codewars.com/kata/57b93d3b8f58135e84000092

//INSTRUCTIONS--
/* The Collatz conjecture states that all numbers reach 1 using the Collatz sequence. The Collatz sequence goes like this: If the number is even then divide by 2; if the number is odd then multiply by 3 and add 1.

A simple sequence woud go like this:

For the number 3 
1. 3 x 3 + 1 = 10
2. 10 / 2 = 5
3. 5 x 3 + 1 = 16 
4. 16 / 2 = 8
5. 8 / 2 = 4
6. 4 / 2 = 2
7. 2 / 2 = 1

Create a function called collatzCount that takes a number and returns the number of steps it takes to get back to 1. Although this problem can be solved without recursion, don't you think it would be more fun with?

You can expect that the number passed to collatzCount will not be less than zero. You can only pass one argument to collatzCount and you can only use that variable in the solution. No counting!

The test cases will expect for your solution to be recursive.

*/

//SOLUTION--
/*  
If the number is 1, return 0
If the number is even then divide by 2 
    if that number is 1, return the length of the stack
    return the function with the argument n/2
if the number is odd then return the function with the argument  n * 3 + 1.
*/
function collatzCount(n) {
    if (n === 1) {
        return 0
    }
    if (n % 2 === 0) {
        if (n / 2 === 1) {
            return new Error().stack.length
        }
        return collatzCount(n / 2)
    }
    return collatzCount(n * 3 + 1)
}
//TESTCASES--
console.log(collatzCount(1), 0,);
console.log(collatzCount(2), 1,);
console.log(collatzCount(3), 7,);