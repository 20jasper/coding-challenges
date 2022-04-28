//URL--
// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e

//INSTRUCTIONS--
/* Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

*/

//SOLUTION--
/* 
I am going to convert the string to lowercase
I am going to get the set of the string and convert it to an array
Then I will iterate through the array of unique characters and find the first character where the first and last index of that character are the same in the lower case version of the input string
Get the index of that character and return the the character at that index in the input string
If all characters repeat, return an empty string
*/
function firstNonRepeatingLetter(s) {
    const lowerCase = s.toLowerCase()
    const unique = [...new Set(lowerCase)]
    for (let i = 0; i < unique.length; i++) {
        if (lowerCase.indexOf(unique[i]) == lowerCase.lastIndexOf(unique[i])) {
            const index = lowerCase.indexOf(unique[i])
            return s.charAt(index)
        }
    }
    return ''
}
//TESTCASES--
console.log(firstNonRepeatingLetter('a'), 'a');
console.log(firstNonRepeatingLetter('stress'), 't');
console.log(firstNonRepeatingLetter('moonmen'), 'e');
console.log(firstNonRepeatingLetter('mm'), '');
console.log(firstNonRepeatingLetter('Tta'), 'a');
console.log(firstNonRepeatingLetter('sTreSS'), 'T');