//URL--
// https://www.codewars.com/kata/59b836abbf10a48ec400017b

//INSTRUCTIONS--
/* A normal number is defined to be one that has no odd factors, except for 1 and possibly itself. Write a method named isNormal that returns true if its integer argument is normal, else false. If the input is less than one return false as well.
*/

//SOLUTION--
/* 
If n is less than 1, return false
I am going to check if each odd number 3 to n divides evenly into n
    If so, return false
return true
*/
function isNormal(n) {
    if (n < 1) {
        return false
    }
    for (let i = 3; i < n; i += 2) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}
//TESTCASES--
console.log(isNormal(5), true);
console.log(isNormal(25), false);
console.log(isNormal(-5), false);