//URL--
// https://www.codewars.com/kata/5547929140907378f9000039
 
//INSTRUCTIONS--
/* Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

    don't worry about uppercase vowels
    y is not considered a vowel for this kata

*/ 
 
//SOLUTION--
/* I am going to split the string into an array and then remove any of the lowercase vowels then join each element of the array together
*/ 
function shortcut (string) {
    return string
                  .split('')
                  .filter(x=>!(x.includes('a') || x.includes('e') || x.includes('i') || x.includes('o') || x.includes('u'))) 
                  .join('');
}
//TESTCASES--
 console.log(shortcut('hello')) //'hll'
 console.log(shortcut('how are you today?')) //'hw r y tdy?'