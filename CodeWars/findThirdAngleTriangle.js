//URL--
// https://www.codewars.com/kata/5a023c426975981341000014

//INSTRUCTIONS--
/* You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.

https://en.wikipedia.org/wiki/Triangle

*/

//SOLUTION--
/*
I am going to subtract the two angles from 180 and return the value
*/
function otherAngle(a, b) {
    return 180 - a - b
}
//TESTCASES--
console.log(otherAngle(30, 60), 90);
console.log(otherAngle(60, 60), 60);
console.log(otherAngle(43, 78), 59);
console.log(otherAngle(10, 20), 150);