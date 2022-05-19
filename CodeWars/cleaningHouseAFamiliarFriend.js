//URL--
// https://www.codewars.com/kata/583b820a7d40425fca000047/train/javascript

//INSTRUCTIONS--
/* Tidy up and de-bug this ugly code. Return the remaining elements in the initial "arr" after removing "howMany" elements from the head. Code must not exceed 4 lines.

function deHead(arr, howMany) {
  
  if (howMany <=> 0) {
    return arr;
  } else if (howMany <= 1) {
    arr.shift(0);
  } if (howMany <= 2) {
    arr.shift(0);
  } else if (howMany <= 3) {
    arr.shift(0);
  } if (howMany <= 4) {
    arr.shift(0);
  } if (howMany <= 5) {
    arr.shift(0);
  } if (howMany <= 6) {
    arr.shift(0);
  } if (howMany <= 7) {
    arr.shift(0);
  } if (howMany <= 9) {
    arr.shift(0);
  } if (howMany <= 9) {
    arr.shift(0);
  }
  return arr;
}
*/

//SOLUTION--
/* I am going to replace the given code with code that returns a slice of the orignal array from index howMany to the end
*/
function deHead(arr, howMany) {
    return arr.slice(howMany);
}
//TESTCASES--
console.log(deHead([1, 2, 3], 2), [3]);