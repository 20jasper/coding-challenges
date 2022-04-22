//URL--
// https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd

//INSTRUCTIONS--
/* Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
Example:

n= 5, m=5: 25
n=-5, m=5:  0

*/

//SOLUTION--
/* I am going to check if either number is less than zero, and if so, return 0
If not, multiply both numbers together and return the result
*/
function paperwork(n, m) {
    if (n < 0 || m < 0) {
        return 0
    }
    return n * m
}

//TESTCASES--
console.log(paperwork(5, 5), 25);
console.log(paperwork(5, -5), 0);
console.log(paperwork(-5, -5), 0);
console.log(paperwork(5, 0), 0);