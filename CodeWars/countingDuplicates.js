//URL--
// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/

//INSTRUCTIONS--
/* Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
Example

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

*/

//SOLUTION--
/* I am going to get the set of the string
Then I will use reduce to check if the first and last index of the character in the original string are the same for each element and add one to the tally if so

I forgot to make it case insensitive, so I added .toLowerCase() to the input at the beginning
*/
function duplicateCount(text) {
    const characters = text.toLowerCase()
    const uniqueCharacters = [...new Set(characters)]
    return uniqueCharacters.reduce((counter, character) => {
        if (characters.indexOf(character) !== characters.lastIndexOf(character)) {
            counter++
        }
        return counter
    }, 0)
}
//TESTCASES--
console.log(duplicateCount(""), 0);
console.log(duplicateCount("abcde"), 0);
console.log(duplicateCount("aabbcde"), 2);
console.log(duplicateCount("aabBcde"), 2);
console.log(duplicateCount("Aa"), 1);
console.log(duplicateCount("Indivisibility"), 1);
console.log(duplicateCount("Indivisibilities"), 2);