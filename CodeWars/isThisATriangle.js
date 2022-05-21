//URL--
// https://www.codewars.com/kata/56606694ec01347ce800001b

//INSTRUCTIONS--
/* Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).

*/

//SOLUTION--
/* I am going to use the spread operator in the parameter to make the input an array
Check if the sum of the lengths of 2 sides of the triangle are more than than 3rd for each combination
    If so, return true
    Else return false
*/
function isTriangle(...sides) {
    const check1 = sides[0] + sides[1] > sides[2]
    const check2 = sides[2] + sides[0] > sides[1]
    const check3 = sides[1] + sides[2] > sides[0]
    return check1 && check2 && check3
}
//TESTCASES--
console.log(isTriangle(1, 2, 2), true);
console.log(isTriangle(7, 2, 2), false);