//URL--
// https://www.codewars.com/kata/59e72051233243fe85000039/

//INSTRUCTIONS--
/* You will be given a string of letters. The string must be returned in alphabetical order.
*/

//SOLUTION--
/* 
*/
function alphabetti(str) {
    return [...str]
        .sort((a, z) => a.localeCompare(z))
        .join('')
}
//TESTCASES--
console.log(alphabetti("hello"), "ehllo");
console.log(alphabetti(""), "");
console.log(alphabetti("Potato"), "aooPtt");