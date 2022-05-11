//URL--
// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7

//INSTRUCTIONS--
/* Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

The geese are any strings in the following array, which is pre-populated in your solution:

  ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

For example, if this array were passed as an argument:

 ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

Your function would return the following array:

["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

*/

//SOLUTION--
/* I am going to filter anything in the array of geese out of the birds array and return the resultant array
*/
function gooseFilter(birds) {
    const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(x => !geese.includes(x))
};
function gooseFilter(birds) {
    const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    let arr = []
    birds.forEach(x => {
        if (geese.includes(x)) {
            return
        }
        arr.push(x)
    })
    return arr
}

//TESTCASES--
console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]), ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]);
console.log(gooseFilter(['a', 'African', 'b', 'African']), ['a', 'b']);