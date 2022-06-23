//URL--
// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

//INSTRUCTIONS--
/* Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

*/

//SOLUTION--
/* 
I am going to split the string by spaces
    Then I am going to sort the array by length
    Then I am going to return the length of the first element in the array
*/
function findShort(s) {
    let arr = s.split(" ");
    arr.sort((a, b) => a.length - b.length);
    return arr[0].length;
}
//TESTCASES--
console.log(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
console.log(findShort("turns out random test cases are easier than writing out basic ones"), 3);
console.log(findShort("Let's travel abroad shall we"), 2);