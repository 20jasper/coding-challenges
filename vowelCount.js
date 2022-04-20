//URL--
// https://www.codewars.com/kata/54ff3102c1bad923760001f3

//INSTRUCTIONS--
/* Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/

//SOLUTION--
/* I am going to split the string into an array so I can filter anything that isn't a vowel
Then I will return the length of the new array
*/
function getCount(str) {
    return str
        .split('')
        .filter(x => 'aeiou'.includes(x))
        .length
}
//TESTCASES--
console.log(getCount("abracadabra"), 5);