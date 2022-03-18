//URL--
// https://www.codewars.com/kata/551b4501ac0447318f0009cd
 
//INSTRUCTIONS--
/* Implement a function which convert the given boolean value into its string representation.
*/ 
 
//SOLUTION--
/* I am going to return "true" if true and "false" if false
*/ 
function booleanToString(b){
    return (b) ? 'true' : 'false';
   }

//TESTCASES--
console.log(booleanToString(true)); //true
console.log(booleanToString(false)); //false
 