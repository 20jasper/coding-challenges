//URL--
// https://www.codewars.com/kata/5b180e9fedaa564a7000009a/

//INSTRUCTIONS--
/* In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

    make as few changes as possible.
    if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

More examples in test cases. Good luck!
*/

//SOLUTION--
/* 
I am going to split the string into an array using the spread operator
I am going to use reduce to add up the number of upper case and lowercase characters
    Set the default value of the counter object to two properties called uppercase and lowercase with values of 0
    If the character to lowercase is the same, add 1 to the lowercase counter
    Else add 1 to the uppercase counter
If the amount of lowercase characters is more or equal to the number of uppercase characters, return the string to lowercase
Else return the string to uppercase
*/
// function solve(s) {
//     const caseCount = [...s]
//         .reduce((obj, character) => {
//             if (character.toLowerCase() === character) {
//                 obj.lowerCase++
//             } else {
//                 obj.upperCase++
//             }
//             return obj
//         }, { upperCase: 0, lowerCase: 0 })
//     if (caseCount.lowerCase >= caseCount.upperCase) {
//         return s.toLowerCase()
//     }
//     return s.toUpperCase()
// }
let solve = (s) => s.length / 2 - [...s].filter(x => x == x.toUpperCase()).length >= 0 ? s.toLowerCase() : s.toUpperCase()
//TESTCASES--
console.log(solve("code"), "code");
console.log(solve("CODe"), "CODE");
console.log(solve("COde"), "code");
console.log(solve("Code"), "code");