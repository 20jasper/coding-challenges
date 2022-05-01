//URL--
// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

//INSTRUCTIONS--
/* The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
Examples

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

Notes

Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

*/

//SOLUTION--
/* 
I am going to convert the string to lower case
I am going to split the string into an array
I am going to use map on the array to change each character to '(' if the first and last time the character appears in the array are the same and ')' if they aren't
*/
function duplicateEncode(word) {
    const lowerCaseArr = [...word.toLowerCase()]
    const encodedArr = lowerCaseArr.map(x => lowerCaseArr.indexOf(x) == lowerCaseArr.lastIndexOf(x) ? '(' : ')')
    return encodedArr.join('')
}
//TESTCASES--
console.log(duplicateEncode("din"), "(((");
console.log(duplicateEncode("recede"), "()()()");
console.log(duplicateEncode("Success"), ")())())");
console.log(duplicateEncode("(( @"), "))((");