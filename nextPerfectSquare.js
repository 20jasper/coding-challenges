//URL--
// https://www.codewars.com/kata/56269eb78ad2e4ced1000013
 
//INSTRUCTIONS--
/* You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.
*/ 
 
//SOLUTION--
/* I am going to check if the square root of the input is an integer
If it is, then add 1 to the square root and square it
If not, return -1
*/ 
function findNextSquare(sq) {
    if (Number.isInteger(Math.sqrt(sq))) {
      return ((Math.sqrt(sq))+1)**2;
    } else{
    return -1;
      }
  }
//TESTCASES--
 console.log(findNextSquare(10)); //-1
 console.log(findNextSquare(16)); //25
 console.log(findNextSquare(1)); //4
 console.log(findNextSquare(100)); //121