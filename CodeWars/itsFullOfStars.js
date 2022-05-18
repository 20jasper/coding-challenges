//URL--
// https://www.codewars.com/kata/56c5f95027be2cbe660017a7

//INSTRUCTIONS--
/* You need to create rectangles of stars for your next great text-based adventure game.

Each rectangle is made of rows and columns of asterisks. The following piece of code creates a rectangle with 3 rows and 6 columns:

var yay = printStars(3, 6);
console.log(yay);

This example code above would print out the following:

******
******
******

In this example, the string returned from the function is the following:

"******\n******\n******"

A few additional rules:

    A newline character ( "\n" ) should be between each row of asterisks.
    If the number of rows or columns is 0 or less, return an empty string ( "" ).

*/

//SOLUTION--
/* I am going to return an empty string is the number of rows or columns is less than 1
I am going to make an array with the same number of elements as there are rows
I am going to fill the array with the character '*' repeated as many times as there are columns 
Then I am going to join the array by the new line character and return the result
*/
function printStars(rows, columns) {
    if (rows < 1 || columns < 1) {
        return ''
    }
    const arr = Array(rows)
    const fill = '*'.repeat(columns)
    return arr.fill(fill).join('\n')
}
//TESTCASES--
console.log(printStars(3, 6), "******\n******\n******");
console.log(printStars(1, 2), "**\n");
console.log(printStars(3, 0), "");
console.log(printStars(0, 45), "");