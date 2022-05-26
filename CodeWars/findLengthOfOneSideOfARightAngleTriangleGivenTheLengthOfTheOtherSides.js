//URL--
// https://www.codewars.com/kata/58dd82aeee8586d9b800007e

//INSTRUCTIONS--
/* Pythagoras' theorem states that the square of the hypotenuse (the side opposite the right angle) is equal to the sum of the squares of the other two sides. For everyone like me who hasn't used Pythagoras' theorem for a long time, basically given the length of the legs of a right angle triangle (the legs of the triangle are connected to the right angle), write a function that returns the length of the third side (the hypotenuse - it's the side facing the right angle and not connected to it by either end).
*/

//SOLUTION--
/* I am going to use the pythagoreon theorem and solve for the hypotenuse
    a^2 + b^2 = c^2
    sqrt(a^2 + b^2) = c
I am going to return the result of plugging in sides a and b to the formula
*/
function pythagorean(sideA, sideB) {
    return Math.sqrt(sideA ** 2 + sideB ** 2)
}
//TESTCASES--
console.log(pythagorean(4, 3), 5);
console.log(pythagorean(8, 6), 10);