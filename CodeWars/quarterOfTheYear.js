//URL--
// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af

//INSTRUCTIONS--
/* Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

*/

//SOLUTION--
/* I am going to divide the month by three, round it up and return the result
*/
const quarterOf = (month) => {
    return Math.ceil(month / 3)
}
//TESTCASES--
console.log()(quarterOf(3), 1)
console.log()(quarterOf(8), 3)
console.log()(quarterOf(11), 4)