//URL--
// https://www.codewars.com/kata/60f94b4c8b940b0038f5e237

//INSTRUCTIONS--
/* Create a BOOOOOM!

Given a number, return a string of the word "Boom", which varies in the following ways:

The string should include n number of "o"s, unless n is below 2 (in that case, return "boom").

If n is evenly divisible by 2, add an exclamation mark to the end.

If n is evenly divisible by 5, return the string in ALL CAPS.

If n is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation mark to the end.

(return 'boom' in all other cases)

Accridation to Er0S - first seen on Edabit https://edabit.com/challenge/XnZAcvr4tCD9ppyrN


boomIntensity(1) returns 'boom'

boomIntensity(5) returns 'BOOOOOM'

boomIntensity(10) returns 'BOOOOOOOOOOM!

or in python ...


boom_intensity(1) returns 'boom'

boom_intensity(5) returns 'BOOOOOM'

boom_intensity(10) returns 'BOOOOOOOOOOM!


*/

//SOLUTION--
/* if n is less than 2, return boom
set a variable equal to a string starting with 'B' with n 'o's in the middle and ending with m
if n is evenly divisible by two, add an exclamation mark to the end
if n is divisible evenly by 5, convert the string to uppercase

*/
function boomIntensity(n) {
    if (n < 2) {
        return 'boom'
    }
    let str = `B${'o'.repeat(n)}m`
    if (n % 2 === 0) {
        str += '!'
    }
    if (n % 5 === 0) {
        str = str.toUpperCase()
    }
    return str
}
//TESTCASES--
console.log(boomIntensity(6), 'Boooooom!');
console.log(boomIntensity(4), 'Boooom!');
console.log(boomIntensity(1), 'boom');
console.log(boomIntensity(5), 'BOOOOOM');