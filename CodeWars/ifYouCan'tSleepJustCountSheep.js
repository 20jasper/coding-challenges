//URL--
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

//INSTRUCTIONS--
/* Description:

If you can't sleep, just count sheep!!
Task:

Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

*/

//SOLUTION--
/* I am going to make an empty string
Then count from 1 to n
    add `${i} sheep...` to the end of the string each time
return it
*/
const countSheep = function (num) {
    let murmur = ''
    for (let i = 1; i <= num; i++) {
        murmur += `${i} sheep...`
    }
    return murmur
}
//TESTCASES--
console.log(countSheep(0), "");
console.log(countSheep(1), "1 sheep...");
console.log(countSheep(2), "1 sheep...2 sheep...");
console.log(countSheep(3), "1 sheep...2 sheep...3 sheep...");