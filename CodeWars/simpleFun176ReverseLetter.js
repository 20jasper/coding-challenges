//URL--
// https://www.codewars.com/kata/58b8c94b7df3f116eb00005b

//INSTRUCTIONS--
/* Task

Given a string str, reverse it omitting all non-alphabetic characters.
Example

For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".
Input/Output

    [input] string str

A string consists of lowercase latin letters, digits and symbols.

    [output] a string


*/

//SOLUTION--
/* 
iterate through the string backwards
    if the character is a letter, add it to the new string
return the new string
*/
function reverseLetter(str) {
    let newString = ""
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i].match(/[a-z]/i)) {
            newString += str[i]
        }
    }
    return newString
}

//TESTCASES--
console.log(reverseLetter("krishan"), "nahsirk")
console.log(reverseLetter("ultr53o?n"), "nortlu")
console.log(reverseLetter("ab23c"), "cba")
console.log(reverseLetter("krish21an"), "nahsirk")