//URL--
// https://www.codewars.com/kata/554ca54ffa7d91b236000023

//INSTRUCTIONS--
/* Enough is enough!

Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motive usually repeats. He isn't fond of seeing the Eiffel tower 40 times. He tells them that he will only sit during the session if they show the same motive at most N times. Luckily, Alice and Bob are able to encode the motive as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?
Task

Given a list and a number, create a new list that contains each number of lst at most N times without reordering. For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3]. With list [20,37,20,21] and number 1, the result would be [20,37,21].

*/

//SOLUTION--
/* 
If the input number is 0 or the array is empty, return an empty array
Otherwise, I am going to create an empty object and filter the array 
    if the property does not exist, set the property's value to 1 and return true
    else, increment the property's value by 1 and check if the value of the property is more than n
        if so, return false, 
    return true
Return the filtered array

After doing it, I realized I was making a check to see if the value was more than n and returning false or true, but I could have just returned the truth value of value of the property not being more than n
*/
// // original version
// function deleteNth(arr, n) {
//     if (arr.length === 0 || n === 0) {
//         return []
//     }
//     const obj = {}
//     return arr.filter(x => {
//         if (!obj[x]) {
//             obj[x] = 1
//             return true
//         }
//         obj[x]++
//         if (obj[x] > n) {
//             return false
//         }
//         return true
//     })
// }
// refactored version
function deleteNth(arr, n) {
    if (arr.length === 0 || n === 0) {
        return []
    }
    const obj = {}
    return arr.filter(x => {
        if (!obj[x]) {
            obj[x] = 1
            return true
        }
        obj[x]++
        return obj[x] <= n
    })
}
//TESTCASES--
console.log(deleteNth([20, 37, 20, 21], 0), []);
console.log(deleteNth([], 2), []);
console.log(deleteNth([1, 2, 1], 1), [1, 2]);
console.log(deleteNth([20, 37, 20, 21], 1), [20, 37, 21]);
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3), [1, 1, 3, 3, 7, 2, 2, 2]);