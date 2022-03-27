//URL--
// https://www.codewars.com/kata/53dc23c68a0c93699800041d
 
//INSTRUCTIONS--
/* Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
*/ 
 
//SOLUTION--
/* I am going to join the array into a string with spaces between each element
*/ 
function smash (words) {
    return words.join(' ')
 };
//TESTCASES--
console.log(smash([])) //
console.log(smash(["hello"])) // hello
console.log(smash(["hello", "amazing", "world"])) // hello amazing world
console.log(smash(["this", "is", "a", "really", "long", "sentence"])) // this is a really long sentence