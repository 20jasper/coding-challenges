//URL--
// https://www.codewars.com/kata/58af092f78a1a54f2000000f/

//INSTRUCTIONS--
/* Compare 2 integers and return if they are equals, don't use the comparison Operators

Can't use these Operators
Operator 	Description
== 	equal to
=== 	equal value and equal type
!= 	not equal
!== 	not equal value or not equal type
> 	greater than
< 	less than
>= 	greater than or equal to
<= 	less than or equal to
Example:

  0 == 0  => true 
  0 == 1  => false 

*/

//SOLUTION--
/* I am going to return not a-b since any value that is 0 will be equal and will return true, and any non 0 value is truthy, and will return false
*/
function d01(a, b) {
    return !(a - b);
}
//TESTCASES--
console.log(d01(10, 10), true);
console.log(d01(10, 2), false);