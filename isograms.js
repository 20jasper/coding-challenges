//URL--
// https://www.codewars.com/kata/54ba84be607a92aa900000f1/

//INSTRUCTIONS--
/* An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)


*/

//SOLUTION--
/* I am going to see if the length of the string is the same as the length of the set of the string converted to lowercase and return the value
*/
function isIsogram(str) {
    const unique = [...new Set(str.toLowerCase())]
    return str.length == unique.length
}
//TESTCASES--
console.log(isIsogram("Dermatoglyphics"), true);
console.log(isIsogram("isogram"), true);
console.log(isIsogram("aba"), false);
console.log(isIsogram(""), true);