//URL--
// https://www.codewars.com/kata/59580a14838112d91f000174

//INSTRUCTIONS--
/* You're a rad climber and you have a rope that you know the length of in meters and a guide book that tells you the height of your climb in feet.

If the rope is long enough to complete the climb, you're golden to send a stellar climb (return true).

Remember the rope has to go up AND down to send the climb.

BUT if the rope is too short, you're doomed to die or doom your friends! For the sake of everyone's dog, return false if that's the case.

If the input is not a number, return null because that's just silly.

*/

//SOLUTION--
/* If input is NaN, return null
else convert the height of the climb to meters
If twice the climb height is less than the rope length, return false
return true otherwise
*/
function canClimb(ropeLength, climbHeight) {
    if (isNaN(ropeLength) || isNaN(climbHeight)) {
        return null
    }
    const climbHeightFeet = climbHeight / 3.281
    return ropeLength > climbHeightFeet * 2
}
//TESTCASES--
console.log(canClimb(0, 1), false);
console.log(canClimb("Hi. I'm a string.", 72), null);
console.log(canClimb(0, 1), false);
console.log(canClimb(100, 1), true);
console.log(canClimb(6, 1), true);
console.log(canClimb(3, 5), false);