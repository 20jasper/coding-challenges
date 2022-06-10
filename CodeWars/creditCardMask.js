//URL--
// https://www.codewars.com/kata/5412509bd436bd33920011bc

//INSTRUCTIONS--
/* Description:

Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.
Examples

"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"

"Skippy" --> "##ippy"

"Nananananananananananananananana Batman!"
-->
"####################################man!"


*/

//SOLUTION--
/* 
If the string is less than or equal to 4 characters long, return it
I am going to return the character "#" repeated the length of the string -4 times with the last 4 characters at the end
*/
// return masked string
function maskify(cc) {
    if (cc.length <= 4) {
        return cc
    }
    const hashtags = '#'.repeat(cc.length - 4)
    return `${hashtags}${cc.slice(-4)}`
}

//TESTCASES--
console.log(maskify('4556364607935616'), '############5616');
console.log(maskify('1'), '1');
console.log(maskify('1111'), '1111');
console.log(maskify('11111'), '#1111');