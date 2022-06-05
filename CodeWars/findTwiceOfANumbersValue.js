//URL--
// https://www.codewars.com/kata/59357d303864834c1a000026

//INSTRUCTIONS--
/* Twice of a number(2*a number) added to 4 gives 20. Write a function that return a number's value.

Return null if added_value or total_value is not a string/number.
Tip

    Writing Equations On Paper Will Made You Easy


*/

//SOLUTION--
/* 
If addedValue or totalValue isn't a string or number, return null
I will solve the equation 2x+addedValue = totalValue for x
    (totalValue-addedValue)/2 = x
    return the value of performing the operation
*/
function twiceOfANumber(addedValue, totalValue) {
    if (!(isNumberOrString(addedValue) && isNumberOrString(totalValue))) {
        return null
    }
    return (totalValue - addedValue) / 2
}
function isNumberOrString(input) {
    return typeof input === 'string' || typeof input === 'number'
}

//TESTCASES--
console.log(twiceOfANumber(4, 20), 8);
console.log(twiceOfANumber(false, 20), 8);
console.log(twiceOfANumber(234, true), 8);