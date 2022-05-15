//URL--
// https://www.codewars.com/kata/58d76854024c72c3e20000de/

//INSTRUCTIONS--
/* Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.
*/

//SOLUTION--
/* 
*/
function reverse(str) {
    const wordArr = str.split(' ')
    const evenReverseStr = wordArr
        .map((x, i) => {
            if (i % 2 === 1) {
                return [...x].reverse().join('')
            }
            return x
        })
        .join(' ')
    return evenReverseStr.trim()
}
//TESTCASES--
console.log(reverse("Reverse this string, please!"), "Reverse siht string, !esaelp");