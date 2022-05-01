//URL--
// https://www.codewars.com/kata/56747fd5cb988479af000028

//INSTRUCTIONS--
/* You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"

#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.

*/

//SOLUTION--
/* I am going to see if the string length is even or odd.
set a variable equal to an empty string
If it's even, add the character before the character in the index n/2 rounded down
Add the character in the index n/2 rounded down and return its value
*/
function getMiddle(s) {
    const middleCharacterindex = Math.floor(s.length / 2)
    let string = ''
    if (s.length % 2 == 0) {
        string += s[middleCharacterindex - 1]
    }
    return string += s[middleCharacterindex]
}
//TESTCASES--
console.log(getMiddle("test"), "es");
console.log(getMiddle("testing"), "t");
console.log(getMiddle("middle"), "dd");
console.log(getMiddle("A"), "A");