//URL--
// https://www.codewars.com/kata/5dd462a573ee6d0014ce715b

//INSTRUCTIONS--
/* Write a function that will check if two given characters are the same case.

    If either of the characters is not a letter, return -1
    If both characters are the same case, return 1
    If both characters are letters, but not the same case, return 0

Examples

'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1

*/

//SOLUTION--
/* I am going to check if either character is not a letter
    If so, return -1
Then I will check if both are the same case
    If so, return 1
return 0
*/
function sameCase(a, b) {
    if (isNotLetter(a) || isNotLetter(b)) {
        return -1
    }
    if (isLowerCase(a) === isLowerCase(b)) {
        return 1
    }
    return 0
}
function isNotLetter(char) {
    return char.toLowerCase() === char.toUpperCase()
}
function isLowerCase(char) {
    return char.toLowerCase() === char
}
//TESTCASES--
console.log(sameCase('a', 'b'), 1);
console.log(sameCase('A', 'B'), 1);
console.log(sameCase('a', 'B'), 0);
console.log(sameCase('A', 'b'), 0);
console.log(sameCase('a', '?'), -1);