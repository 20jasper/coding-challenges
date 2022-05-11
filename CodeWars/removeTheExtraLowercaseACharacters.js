//URL--
// https://www.codewars.com/kata/597f3434ba9e2f8efa000090

//INSTRUCTIONS--
/* Very simple kata, trying to remove those pesky lowercase a characters, but why will it not work?
*/

//SOLUTION--
/* I am going to delete the i from the regular expression so it becomes case sensitive again
*/
//given code
// function removeA(str) {

//     return str.replace(/['a']/gi, '');

//     }
//debugged code
function removeA(str) {
    return str.replace(/['a']/g, '');
}
//TESTCASES--
console.log(removeA("Healaaalaoaa!"), "Hello!");
console.log(removeA("CaaaaAaaaT IaN Aaa HaaaaaAaTaa"), "CAT IN A HAT");