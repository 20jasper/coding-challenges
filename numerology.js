//URL--
// https://www.codewars.com/kata/525b4164eb636fb2f90002a0

//INSTRUCTIONS--
/* In numerology, every number has a certain meaning that expresses someones connection to the universe! This single digit integer can be calculated by adding up every digit in the birthdate: year, month, and date.
Task

Calculate the single integer digit by adding up every digit in the birthdate: month, date, full year, from left to right (MMDDYYYY). If the sum is greater or equal to 10, add up the two digits of the sum.

You will be passed in a Date object corresponding to your language.
Example

For example, with date '06/14/2010'

=> 06142010
sum 	digits left 	action
0 	06142010 	0+0
0 	6142010 	0+6
6 	142010 	6+1
7 	42010 	7+4
11 	2010 	1+1 (sum is greater or equal to 10)
2 	2010 	2+2
4 	010 	4+0
4 	10 	4+1
5 	0 	5+0
5 	done 	

So, what is your number?

*/

//SOLUTION--
/* I am going to get the year with the getUTCFullYear method
Then I'm going to get the month with the getUTCMonth method +1
Then I'll get the date by using the getUTCDate method
Then I'll make a function that adds up all the numerals in the month, year, and day until it is one long
To do that, I'll convert the number to a string then split that into an array
Then I'll use reduce to sum the digits
Repeat until it's one long
Return the resultant value
*/
function solution(date) {
    const year = date.getUTCFullYear()
    const month = date.getUTCMonth() + 1
    const day = date.getUTCDate()
    const digitString = `${year}${month}${day}`

    function sumDigits(digitString) {
        if (digitString.length > 1) {
            const sum = [...digitString].reduce((sum, value) => sum + Number(value), 0)
            return sumDigits(sum.toString())
        }
        return Number(digitString)
    }
    return sumDigits(digitString)
}

//TESTCASES--
console.log(solution(new Date('10/13/1964')), 7,);
console.log(solution(new Date('01/02/2008')), 4,);
