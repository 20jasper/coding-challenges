//URL--
// https://www.codewars.com/kata/5264d2b162488dc400000001

//INSTRUCTIONS--
/* Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

*/

//SOLUTION--
/* I am going to split the string by spaces and then use map to split and reverse words that are longer than 4 characters
Then I wiil join that by spaces and return it
*/
function spinWords(string) {
    const arr = string.split(' ')
    const arrSpun = arr.map(x => (x.length >= 5) ? [...x].reverse().join('') : x)
    return arrSpun.join(' ')
}
//TESTCASES--
console.log(spinWords("Welcome"), "emocleW");
console.log(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
console.log(spinWords("This is a test"), "This is a test");
console.log(spinWords("This is another test"), "This is rehtona test");