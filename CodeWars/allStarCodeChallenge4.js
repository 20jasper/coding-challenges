//URL--
// https://www.codewars.com/kata/586405a639c5abc2db0000e8

//INSTRUCTIONS--
/* This Kata is intended as a small challenge for my students

All Star Code Challenge #4

Create a function that takes in an object of an nba player, and returns the college that the player went to

var curry = {fname: "Steph", lname:"Curry", number:30, team:"Warriors", college:"Davidson"}
getCollege(curry) // ==> "Davidson"

*/

//SOLUTION--
/* I am going to return player.college
*/
function getCollege(player) {
    return player.college
}
//TESTCASES--
console.log(getCollege({ fname: "Steph", lname: "Curry", number: 30, team: "Warriors", college: "Davidson" }), "Davidson");