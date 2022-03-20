//URL--
// https://www.codewars.com/kata/563cf89eb4747c5fb100001b
 
//INSTRUCTIONS--
/* Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.
*/ 
 
//SOLUTION--
/* I am going to filter out the minimum number from the array

With that approach, it removed all numbers that were the lowest value, so I instead found the index of the first element equal to the minimum value and filtered that 
*/ 
function removeSmallest(numbers) {
    const min = Math.min(...numbers);
    const minIndex = numbers.findIndex(x => x==min);
    return newNumbers = numbers.filter((x, i) => i !== minIndex);
  }
//TESTCASES--
console.log(removeSmallest([1,2,3,4,5])) // [2,3,4,5]
console.log(removeSmallest([1,5,2])) // [5,2]
console.log(removeSmallest([3,2,5,4,5])) // [3,5,4,5]
console.log(removeSmallest([2, 2, 1, 2, 1])) // [2,2,2,1]
