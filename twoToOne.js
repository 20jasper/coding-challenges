//URL--
// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/javascript

//INSTRUCTIONS--
/* Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
Examples:

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


*/

//SOLUTION--
/* I am going to concatenate the strings then split it into an array. 
Then I will create a new set to get the distinct values and use the spread operator to turn it into an array.
Then I will sort it and then join it back into a string

After doing all that, I realized turning it into an array was unnecesarry and refactored
*/
function longest(s1, s2) {
    const uniqueLetters = new Set(s1 + s2)
    return [...uniqueLetters]
        .sort()
        .join('')
}
//TESTCASES--
console.log(longest("aretheyhere", "yestheyarehere"), "aehrsty");
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu");
console.log(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy");