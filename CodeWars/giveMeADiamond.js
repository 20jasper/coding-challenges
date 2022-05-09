//URL--
// https://www.codewars.com/kata/5503013e34137eeeaa001648

//INSTRUCTIONS--
/* Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.
Task

You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.
Examples

A size 3 diamond:

 *
***
 *

...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *

...that is:

"  *\n ***\n*****\n ***\n  *\n"
*/

//SOLUTION--
/* 
I am goin to return null if the input is even or less than 0
    I am going to return null if the number mod 2 is not 1
I am going to loop throught the array
    I am going to find the middle number by rounding down the number divided by 2
    I am going to find the number of stars with function -|2(i-middle)|+2
    I am going to find the number of spaces by rounding down the number - the 
*/
function diamond(n) {
    if (n % 2 !== 1) {
        return null
    }
    const arr = []
    for (let i = 0; i < n; i++) {
        const middle = Math.floor(n / 2)
        const numOfStars = n - Math.abs(2 * (i - middle))
        const numOfSpaces = Math.abs(2 * (i - middle)) / 2
        arr.push(`${' '.repeat(numOfSpaces)}${'*'.repeat(numOfStars)}\n`)
    }
    return arr.join('')
}
//TESTCASES--
console.log(diamond(1), "*\n");
console.log(diamond(3), " *\n***\n *\n");
console.log(diamond(5), "  *\n ***\n*****\n ***\n  *\n");
console.log(diamond(2), null);
console.log(diamond(-3), null);
console.log(diamond(0), null);