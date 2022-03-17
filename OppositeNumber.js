//URL-- 
//https://www.codewars.com/kata/56dec885c54a926dcd001095
 
//INSTRUCTIONS--
//Very simple, given an integer or a floating-point number, find its opposite.
 
//SOLUTION--
//multiplly the input by -1
function opposite(number) {
    number *=-1;
    return number;
  }

//TESTCASES--
console.log(opposite(-1));
console.log(opposite(0));
console.log(opposite(10));
console.log(opposite(3));
console.log(opposite(-4.5));