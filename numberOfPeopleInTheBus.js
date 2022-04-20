//URL--
// https://www.codewars.com/kata/5648b12ce68d9daa6b000099

//INSTRUCTIONS--
/* There is a bus moving in the city, and it takes and drop some people in each bus stop.

You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

The second value in the first integer array is 0, since the bus is empty in the first bus stop.

*/

//SOLUTION--
/* I am going to create a variable for the number of people on the bus, and then for each integer pair, I will add the first to the value and then subtract the second
*/
const number = function (busStops) {
    return busStops.reduce((sum, value) => sum + value[0] - value[1], 0)
}
//TESTCASES--
console.log(number([[10, 0], [3, 5], [5, 8]]), 5);
console.log(number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]), 17);
console.log(number([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]]), 21);
console.log(number([[0, 0]]), 0);