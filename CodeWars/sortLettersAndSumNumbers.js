//URL--
// https://www.codewars.com/kata/58bae32c14f4f2d378000ce8

//INSTRUCTIONS--
/* Create a function sortAndSum(), the function should return an array.

The array should contain letters in the arguments sorted alphabetically with the last index of the aray containing the sum of all of the numbers in the arguments.

Ex:

sortAndSum(1, 3, "a", 4, "f", "e", 5, "c");

returns ["a", "c", "e", "f", 13];

*/

//SOLUTION--
/* I am going to put all of the arguments into an array and sort it
Then I will set the sum equal to 0
Iterate through the array until a string is reached
    add each element to the sum
    remove it from the array
    decrement the index by 1
Push the sum onto the array
return the array
*/
function sortAndSum(...args) {
    const arr = [...args]
    arr.sort()
    let sum = 0
    for (let i = 0; typeof arr[i] === 'number'; i++) {
        sum += arr[i]
        arr.splice(i, 1)
        i--
    }
    arr.push(sum)
    return arr
}

//TESTCASES--
console.log(sortAndSum(1, 3, "a", 4, "f", "e", 5, "c"), ["a", "c", "e", "f", 13]);