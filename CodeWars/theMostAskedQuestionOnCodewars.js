//URL--
// https://www.codewars.com/kata/5935ecef7705f9614500002d

//INSTRUCTIONS--
/* What is the most asked question on CodeWars?

    Can someone explain ?

You need to write a function detect that will check if a string starts with Can someone explain, case sensitive. Return true if so, false otherwise.

Let's hope you don't write a solution that makes people ask that question at you!

*/

//SOLUTION--
/* I am going to use the startsWith method to see if the string starts with that string and return the value
*/
function detect(comment) {
    return comment.startsWith("Can someone explain")
}
//TESTCASES--
console.log(detect('Can someone explain to me what this kata is about?'), true);
console.log(detect('Can someone solve this kata for me?'), false);
console.log(detect('can someone explain to me how to enable caps lock/'), false);