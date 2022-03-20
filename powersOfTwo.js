//URL--
// https://www.codewars.com/kata/57a083a57cb1f31db7000028
 
//INSTRUCTIONS--
/* Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
*/ 
 
//SOLUTION--
/* I am going to make an empty array 
Then I will calculate 2^n and add to the end of the array 
Repeat until the desired amount of elements are added
*/ 
function powersOfTwo(n){
    let arr = [];
    for (let i = 0; i<=n; i++) {
      arr.push(2**i);
    }
    return arr;
  }
  //TESTCASES--
  console.log(powersOfTwo(0)) //[1]
  console.log(powersOfTwo(1)) //[1, 2]
  console.log(powersOfTwo(5)) //[1, 2, 4, 8, 16]