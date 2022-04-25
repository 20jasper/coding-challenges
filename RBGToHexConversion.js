//URL--
// https://www.codewars.com/kata/513e08acc600c94f01000001/

//INSTRUCTIONS--
/* The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3

*/

//SOLUTION--
/* 
If the number is lower than 0 or equal to 0, I will set it to 00
If the number is higher than or equal to255, I will set it to FF
I am going to use the toString() method with radix 16 to convert each number to hexadeximal
Then I will use toUpperCase to Capitalize it and return it 
Then I will return them in a template literal so that they are all together

Some numbers were only 1 long, so I left padded them with a 0 if they were less than 2 characters 
*/
function rgb(r, g, b) {
    function decimalToHex(value) {
        if (value >= 255) {
            return 'FF'
        }
        if (value <= 0) {
            return '00'
        }
        //convert to hexadecimal, make uppercase, and left pad with zeros
        return (value).toString(16).toUpperCase().padStart(2, '0')
    }
    return `${decimalToHex(r)}${decimalToHex(g)}${decimalToHex(b)}`
}
//TESTCASES--
console.log(rgb(0, 0, 0), '000000');
console.log(rgb(0, 0, -20), '000000');
console.log(rgb(300, 255, 255), 'FFFFFF');
console.log(rgb(173, 255, 47), 'ADFF2F');
console.log(rgb(178, 12, 19), 'B20C13');