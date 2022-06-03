//URL--
// https://www.codewars.com/kata/58649884a1659ed6cb000072

//INSTRUCTIONS--
/* You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, update_light('green') should return 'yellow'.

Note: Use "" instead of '' in C++.

*/

//SOLUTION--
/* I am going to make an object with the properties being "green", "red" and "yellow"
    The values will be the appropriate value
Return the value of the input property
*/
function updateLight(current) {
    const nextLight = {
        "green": "yellow",
        "yellow": "red",
        "red": "green",
    }
    return nextLight[current]
}
//TESTCASES--
console.log(updateLight("green"), "yellow");
console.log(updateLight("yellow"), "red");
console.log(updateLight("red"), "green");