//URL--
// https://www.codewars.com/kata/52597aa56021e91c93000cb0
 
//INSTRUCTIONS--
/* Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

*/ 
 
//SOLUTION--
/* I am going to filter out each 0 and add one to a tally each time
Then I will add that many 0s to the array
*/ 
function moveZeros(arr) {
    let tally = 0;
    const noZeros = arr.filter(x=>{
      if (x===0) {
        tally++
        return false;
      } else {
        return true;
      }
    }) 
    const zeroArr = Array(tally).fill(0);
    return [...noZeros, ...zeroArr];
  } 
//TESTCASES--
 console.log(moveZeros([1,0,0,0,0,0])) //[1,0,0,0,0,0]
 console.log(moveZeros([1,0,0,4,0,0])) //[1,4,0,0,0,0]
 console.log(moveZeros([])) //[]
 console.log(moveZeros([0,false,4])) //[false,4,0]
