//URL--
// https://www.codewars.com/kata/550554fd08b86f84fe000a58

//INSTRUCTIONS--
/* Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
Example 1:

a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]
Example 2:

a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []
*/

//SOLUTION--
/* I am ogoing to filter the first array by what is a substring of an element of the second
    Iterate through the second array    
        If the element of a2 includes the current element of a1, return true
        If no element in a1 contains the first current element of a1, return false
return the resultant array

I forgot to sort the array, so I returned the sorted the array
*/
function inArray(array1, array2) {
    const substringArr = array1.filter(x => {
        for (let i = 0; i < array2.length; i++) {
            if (array2[i].includes(x)) {
                return true
            }
        }
        return false
    })
    return substringArr.sort()
}
//TESTCASES--
console.log(inArray(["hi"], ['hit']), ['hi']);
console.log(inArray(["hi"], ['hat']), []);
console.log(inArray(["hi", 'he'], ['hit', 'henna']), ['hi', 'he']);
console.log(inArray(["hi", 'hat'], ['hit', 'henna']), ['hi']);
console.log(inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]), ["arp", "live", "strong"]);