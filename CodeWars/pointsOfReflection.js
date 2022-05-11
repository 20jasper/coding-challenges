//URL--
// https://www.codewars.com/kata/57bfea4cb19505912900012c

//INSTRUCTIONS--
/* "Point reflection" or "point symmetry" is a basic concept in geometry where a given point, P, at a given position relative to a mid-point, Q has a corresponding point, P1, which is the same distance from Q but in the opposite direction.
Task

Given two points P and Q, output the symmetric point of point P about Q. Each argument is a two-element array of integers representing the point's X and Y coordinates. Output should be in the same format, giving the X and Y coordinates of point P1. You do not have to validate the input.

This kata was inspired by the Hackerrank challenge Find Point

*/

//SOLUTION--
/* I will do multiply the midpoint by 2 and subtract p
    return the x and y coordinate
*/
function symmetricPoint(p, q) {
    const xCoordinate = 2 * q[0] - p[0]
    const yCoordinate = 2 * q[1] - p[1]
    return [xCoordinate, yCoordinate]
}
//TESTCASES--
console.log(symmetricPoint([0, 0], [1, 1]), [2, 2]);
console.log(symmetricPoint([2, 6], [-2, -6]), [-6, -18]);
console.log(symmetricPoint([10, -10], [-10, 10]), [-30, 30]);