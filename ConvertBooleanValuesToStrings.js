//URL--
// https://www.codewars.com/kata/53369039d7ab3ac506000467
 
//INSTRUCTIONS--
/* Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/ 
 
//SOLUTION--
/* I am going to make a function that returns "yes" when true and "no" when false
*/ 
function boolToWord( bool ){
    if (bool) {
      return 'Yes';
    } else {
      return 'No';
    }
  }
 
//TESTCASES--
 boolToWord(true);
 boolToWord(false);