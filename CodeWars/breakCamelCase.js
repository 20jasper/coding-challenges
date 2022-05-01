//URL--
// https://www.codewars.com/kata/5208f99aee097e6552000148
 
//INSTRUCTIONS--
/* Complete the solution so that the function will break up camel casing, using a space between words.
Example

"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""


*/ 
 
//SOLUTION--
/* I am going split the string into an array
If a letter is capital, then I will add a space before
*/ 
function solution(string) {
    return string
                  .split('')
                  .map(x=> x.toLowerCase()!==x ? ' '+x : x)
                  .join('');
}

//TESTCASES--
 console.log(solution('camelCasing')) //'camel Casing'
 console.log(solution('camelCasingTest')) //'camel Casing Test'