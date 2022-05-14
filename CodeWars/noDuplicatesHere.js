//URL--
// https://www.codewars.com/kata/5592fcbf71f21d976a000011

//INSTRUCTIONS--
/* Return the array/list passed into the function with all duplicates removed.

The items in the returned array should be sorted alphabetically, with numbers before strings.

The function should remove any null, undefined and invalid values from the array (in JS: all falsey values (NaN, false, undefined, null etc.) have to be removed). If the variable is not an array/list, the function should return a string “Not an array”.

*/

//SOLUTION--
/* If the input isn't an array, return "Not an array"
Else make a new set from the array and then filter all falsey values
sort the array and return it
*/
function arrayDeDup(array) {
    if (!Array.isArray(array)) {
        return "Not an array"
    }
    const uniqueArr = [...new Set(array)]
    const filteredUniqueArr = uniqueArr.filter(x => x)
    return filteredUniqueArr.sort()
}
//TESTCASES--
console.log(arrayDeDup(["g", 3, "a", "a"]), [3, 'a', 'g']);
console.log(arrayDeDup(["code", "wars", "ain't", null, NaN, "code", "wars", "ain't", "the", "same", "as", "the", "rest"]), ['ain\'t', 'as', 'code', 'rest', 'same', 'the', 'wars']);
console.log(arrayDeDup([3, 0, "3", 3, "three", "three", "three"]), ['3', 3, 'three']);
console.log(arrayDeDup(23), "Not an array");