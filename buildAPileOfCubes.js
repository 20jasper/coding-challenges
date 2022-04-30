//URL--
// https://www.codewars.com/kata/5592e3bd57b64d00f3000047

//INSTRUCTIONS--
/* Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.

You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.
Examples:

findNb(1071225) --> 45

findNb(91716553919377) --> -1

*/

//SOLUTION--
/* I am going to set the sum to 0 and add the cube of 1 + the number added to the sum until the sum is more than or equal to the target
If the sum is more than the target, return -1
If the sum is equal to the target, return the last integer that was cubed and added to the sum
*/
function findNb(target, sum = 0, numberAdded = 0) {
    if (sum < target) {
        sum += (numberAdded + 1) ** 3
        numberAdded++
        return findNb(target, sum, numberAdded)
    }
    if (target === sum) {
        return numberAdded
    }
    return (-1);
}
//TESTCASES--
console.log(findNb(1), 1);
console.log(findNb(2), -1);
console.log(findNb(9), 2);
console.log(findNb(4183059834009), 2022);
console.log(findNb(24723578342962), -1);
console.log(findNb(135440716410000), 4824);