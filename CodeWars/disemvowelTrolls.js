//URL--
// https://www.codewars.com/kata/52fba66badcd10859f00097e

//INSTRUCTIONS--
/* Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

*/

//SOLUTION--
/* I am going to use replace and regex to remove every vowel
    I am going to use the pattern /[aeiou]/gi to get rid of every vowel case insensitively
return the result
*/
function disemvowel(str) {
    return str.replace(/[aeiou]/gi, "")
}
//TESTCASES--
console.log(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!");
console.log(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?");