//URL--
// https://www.codewars.com/kata/545cedaa9943f7fe7b000048

//INSTRUCTIONS--
/* A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

*/

//SOLUTION--
/* I am going to iterate through each character of a string of the alphabet and check if the input string includes that character
If not return false
Return true if all letters are in the string

I found out you can just use the every method to see if every element in an array passes a test, so I refactored and did it that way too
*/

// // first version
// function isPangram(string) {
//     const alphabet = "abcdefghijklmnopqrxtuvwxyz"
//     for (let i = 0; i < alphabet.length; i++) {
//         if (!(string.toLowerCase().includes(alphabet[i]))) {
//             return false
//         }
//     }
//     return true
// }
// refactored version
function isPangram(string) {
    const alphabet = [..."abcdefghijklmnopqrxtuvwxyz"]
    return alphabet.every(letter => (string.toLowerCase().includes(letter)))
}
//TESTCASES--
console.log(isPangram("The quick brown fox jumps over the lazy dog."), true);
console.log(isPangram("24934729347293472983472937492iwdhf"), false);
console.log(isPangram("abcdefghiJKLmnopqrxtuvwxyz"), true);