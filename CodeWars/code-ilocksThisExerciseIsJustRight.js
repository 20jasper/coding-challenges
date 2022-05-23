//URL--
// https://www.codewars.com/kata/58063f6c6d88be7cc200006b

//INSTRUCTIONS--
/* Task

Create a function that will replace the String that is "Just Right" with "Code-ilocks". Make sure if the Element is "too much" that she doesn't end up in that index!
Example:

["Too Big","Too Small","Just Right"] => ["Too Big","Too Small","Code-ilocks"]

*/

//SOLUTION--
/* I am going to use map on the function to replace any element with "Just Right" with "Code-ilocks" and return the resultant array
*/
function whichOne(arr) {
    return arr.map(x => {
        if (x === "Just Right") {
            return "Code-ilocks"
        }
        return x
    })
}
//TESTCASES--
console.log(whichOne(["Too Big", "Too Small", "Just Right"]), ["Too Big", "Too Small", "Code-ilocks"]);
console.log(whichOne(["just right", "Just Right", "JUST RIGHT"]), ["just right", "Code-ilocks", "JUST RIGHT"]);
console.log(whichOne(["Too Big", "Too Small", "Too Hot"]), ["Too Big", "Too Small", "Too Hot"]);