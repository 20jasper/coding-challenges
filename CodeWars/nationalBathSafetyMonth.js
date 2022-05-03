//URL--
// https://www.codewars.com/kata/57d14a9d95497e9912000267

//INSTRUCTIONS--
/* Apparently, in the US, January is National Bath Safety Month!!

To celebrate, in this kata you need to decide if a string (s) is safe from falling in the bath (x)!

Very basic, if the string can fit in the bath, it could fall in. We can not allow that in safety month! If the string can fit in, it's not safe so return false, otherwise return true, as the string couldn't fit in if it wanted to!

A bath will look like this (for example):

|~~~~~~~|

Where ~ is the water and | is the side of the bath.

Remember the sides of the bath (|) do not count as water! There will always be two sides.

*/

//SOLUTION--
/* If the string's length is less than the bath's length minus 2, return false
Else, return true
*/
function bath(string, bath) {
    console.log(string.length, bath.length - 2)
    return string.length > bath.length - 2
}
//TESTCASES--
console.log(bath('qVkgP', '|~~~|'), true);
console.log(bath('MT', '|~~~~~| '), false);
console.log(bath('ngNPJan', '|~~~~~~~|'), false);