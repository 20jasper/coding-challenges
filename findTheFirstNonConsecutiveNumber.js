//URL--
// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144

//INSTRUCTIONS--
/* Your task is to find the first element of an array that is not consecutive.

By not consecutive we mean not exactly 1 larger than the previous element of the array.

E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

If the whole array is consecutive then return null.

The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!
*/

//SOLUTION--
/* Check if the current element is equal to one less than the next element
If not, return the next element
If there are no more items left in the array, return null
*/
function firstNonConsecutive(arr) {
    //loop through every element in the array
    for (let i = 0; i < arr.length - 1; i++) {
        //check if current element is not one less than the next
        if (arr[i] !== arr[i + 1] - 1) {
            //if so return the next element in the array
            return arr[i + 1]
        }
    }
    //else return null
    return null
}

//TESTCASES--
console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]), 6);
console.log(firstNonConsecutive([1, 2, 4]), 4);
console.log(firstNonConsecutive([1, 2, 3]), null);