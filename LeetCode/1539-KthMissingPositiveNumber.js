//URL--
// https://leetcode.com/problems/kth-missing-positive-number/

//INSTRUCTIONS--
/* Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

Find the kth positive integer that is missing from this array.

 

Example 1:

Input: arr = [2,3,4,7,11], k = 5
Output: 9
Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.

Example 2:

Input: arr = [1,2,3,4], k = 2
Output: 6
Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.

 

Constraints:

    1 <= arr.length <= 1000
    1 <= arr[i] <= 1000
    1 <= k <= 1000
    arr[i] < arr[j] for 1 <= i < j <= arr.length


*/

//SOLUTION--
/* 
I am going to make a variable called missingIntegerCount to count the number of missing integers and initialize it as 0
I am going to make a variable called current element and initialize it as 0
I am going to make a variable called i to represent the current integer and initialize it as 1
Then, while the counter is less than k, check if the current element in the array is equal to the current integer
    if so, increment the currentElement index by 1
    if not, increment the missingIntegerCount by 1
    increment the integer
return the current integer - 1
*/
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const findKthPositive = function (arr, k) {
    let missingIntegerCount = 0;
    let currentElement = 0;
    let integer = 1;
    while (missingIntegerCount < k) {
        if (arr[currentElement] === integer) {
            currentElement++
        } else {
            missingIntegerCount++
        }
        integer++
    }
    return --integer
};
//TESTCASES--
console.log(findKthPositive(arr = [2, 3, 4, 7, 11], k = 5), 9);
console.log(findKthPositive(arr = [1, 2, 3, 4], k = 2), 6);