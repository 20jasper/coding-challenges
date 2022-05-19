//URL--
// https://www.codewars.com/kata/51f2b4448cadf20ed0000386/

//INSTRUCTIONS--
/* Complete the function/method so that it returns the url with anything after the anchor (#) removed.
Examples

"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/

//SOLUTION--
/* 
I am going to make an empty string
I am going to iterate through the input string and add every character to the new string until I hit a '#'
Then I will return the new string
*/
// function removeUrlAnchor(url) {
//     let noAnchor = ''
//     for (let i = 0; i < url.length; i++) {
//         const character = url[i];
//         if (character === '#') {
//             break
//         }
//         noAnchor += character
//     }
//     return noAnchor
// }
const removeUrlAnchor = (url) => url.split('#')[0]
//TESTCASES--
console.log(removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com');
console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'), 'www.codewars.com/katas/?page=1');
console.log(removeUrlAnchor('www.codewars.com/katas/'), 'www.codewars.com/katas/');