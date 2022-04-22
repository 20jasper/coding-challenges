//URL--
// https://www.codewars.com/kata/5583090cbe83f4fd8c000051

//INSTRUCTIONS--
/* Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
Example:

348597 => [7,9,5,8,4,3]
0 => [0]

*/

//SOLUTION--
/* I am going to change the number into a string and then turn that into an array and use the reverse method to reverse it

I forgot to convert the elements of the array to numbers again, so I used map and the unary plus operator to do so
*/
function digitize(n) {
    return [...n.toString()]
        .reverse()
        .map(x => +x)
}
//TESTCASES--
console.log(digitize(35231), [1, 3, 2, 5, 3]);
console.log(digitize(0), [0]);