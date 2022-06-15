//URL--
// https://www.codewars.com/kata/5174a4c0f2769dd8b1000003

//INSTRUCTIONS--
/* Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []

*/

//SOLUTION--
/* If  null is passed in, return an empty array
else sort the array in acending order with the sort() method and return the result
*/
function solution(nums) {
    if (nums === null) {
        return []
    }
    return nums.sort((a, z) => a - z)
}
//TESTCASES--
console.log(solution([1, 2, 3, 10, 5]), [1, 2, 3, 5, 10])
console.log(solution(null), [])
console.log(solution([]), [])
console.log(solution([20, 2, 10]), [2, 10, 20])
console.log(solution([2, 20, 10]), [2, 10, 20])