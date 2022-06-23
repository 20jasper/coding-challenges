//URL--
// https://www.codewars.com/kata/55908aad6620c066bc00002a

//INSTRUCTIONS--
/* Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false


*/

//SOLUTION--
/* 
Iterate through the array and count up the number of x and o's case insensitively
return true if the count is equal
*/
function XO(str) {
    let xCount = 0;
    let oCount = 0;
    for (let i = 0; i < str.length; i++) {
        const letter = str[i].toLowerCase()
        if (letter === "x") {
            xCount++
        }
        if (letter === "o") {
            oCount++
        }
    }
    return xCount === oCount
}
//TESTCASES--
console.log(XO('xo'), true);
console.log(XO("xxOo"), true);
console.log(XO("xxxm"), false);
console.log(XO("Oo"), false);
console.log(XO("ooom"), false);