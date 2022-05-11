//URL--
// https://www.codewars.com/kata/577bd026df78c19bca0002c0

//INSTRUCTIONS--
/* Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

    S is misinterpreted as 5
    O is misinterpreted as 0
    I is misinterpreted as 1

The test cases contain numbers only by mistake.

*/

//SOLUTION--
// function correct(string) {
//     return string
//         .replaceAll('0', 'O')
//         .replaceAll('1', 'I')
//         .replaceAll('5', 'S')
// }

// function correct(string) {
//     while(string.includes('0')){
//         string=string.replace('0','O')
//     }
//     while(string.includes('1')){
//         string=string.replace('1','I')
//     }
//     while(string.includes('5')){
//         string=string.replace('5','S')
//     }
//     return string
// }

// function correct(string) {
//     return string
//         .replace(/0/g, 'O')
//         .replace(/1/g, 'I')
//         .replace(/5/g, 'S')
// }
function correct(string) {
    const obj = {
        1: 'I',
        5: 'S',
        0: 'O',
    }
    const arr = [...string]
    const correctedString = arr.map(x => obj[x] || x).join('')
    return correctedString
}
//TESTCASES--
console.log(correct("L0ND0N"), "LONDON");
console.log(correct("DUBL1N"), "DUBLIN");
console.log(correct("51NGAP0RE"), "SINGAPORE");
console.log(correct("BUDAPE5T"), "BUDAPEST");
console.log(correct("PAR15"), "PARIS");