//URL--
// https://www.codewars.com/kata/59791f12b904082340000040

//INSTRUCTIONS--
/* Your task is to write a function taking the coordinates of three points with different x, y coordinates: A(x1, y1), B(x2, y2) and C(x3, y3), and determine whether B is the tip of an isosceles triangle.

B is the tip of an iscosceles triangle only if the length of AB is equal to BC.

*/

//SOLUTION--
/* 
I am going to make new variables equal to an array of the x and y coordinate of A, B, and C
I am going o use the length formula (sqrt((x-x')^2+(y-y')^2) to get the lengths of AB and BC
If they are equal, return true
Else, return false
*/
function isIsocele(x1, y1, x2, y2, x3, y3) {
    const A = [x1, y1]
    const B = [x2, y2]
    const C = [x3, y3]
    return getLength(A, B) === getLength(B, C)
}
function getLength(point1, point2) {
    return Math.sqrt((point1[0] - point2[0]) ** 2 + (point1[1] - point2[1]) ** 2)
}
//TESTCASES--
console.log(isIsocele(0, 0, 4, 2, 8, 0), true);
console.log(isIsocele(0, 0, 6, 0, 3, 2), false);
console.log(isIsocele(0, 0, 2, 2, 9, 0), false);