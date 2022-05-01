//URL--
// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a
 
//INSTRUCTIONS--
/* Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.
*/ 
 
//SOLUTION--
/* I will covert each value to milliseconds and add them up
*/ 
function past(h, m, s){
    return ((h*60+m)*60+s)*1000;
  }
 
//TESTCASES--
console.log(past(0,0,0)) //0
console.log(past(1,1,0)) // 3660000
console.log(past(11,3,12)) //39792000

 