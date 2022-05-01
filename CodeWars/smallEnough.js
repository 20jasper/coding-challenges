//URL--
// https://www.codewars.com/kata/57cc981a58da9e302a000214
 
//INSTRUCTIONS--
/* You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.

*/ 
 
//SOLUTION--
/* I am going to set a variable called belowLimit to true
If a number is higher than the limit, I will change it's value to false then return belowLimit
If no values are higher than the limit return belowLimit
*/ 
function smallEnough(arr, limit){
    let belowLimit = true;
    for (let i = 0; i<=arr.length-1; i++) {
      if (arr[i]>limit) {
          return belowLimit = false;
          }
      } return belowLimit;
  }
  //TESTCASES--
  console.log(smallEnough([66, 101], 200)) // true
  console.log(smallEnough([66, 200], 200)) // true
  console.log(smallEnough([200, 5], 200)) // true
  console.log(smallEnough([-209, 5], 200)) // true
  console.log(smallEnough([209, 5], 200)) // false
  console.log(smallEnough([5], 1)) // false