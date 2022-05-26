//URL--
// https://www.codewars.com/kata/5d51b29f8bc69a0011071b4a

//INSTRUCTIONS--
/* You like listening to music at the office. You frequently have to change the volume in your headphones thanks to your talkative coworkers, and you find yourself using the + and - on your keyboard to do so.

The keys increase and decrease the volume by 2 with each keystroke. There's just one problem- you prefer numbers that are divisible by 3.

Your coworkers are being loud- increase the volume to drown them out!

Write a function that takes in current volume and outputs how many times you will have to press the + key on your keyboard to increase the volue and make it a number that is divisible by three.

The music should still be audible (0 and below are not going to work well at drowning out your coworkers.)

(ex: volume = 4 : output = 1, one key press would take you to 6 by adding 2 to volume- 6 is divisible by 3)

*/

//SOLUTION--
/* I am going to make a  do while loop that adds 2 to the volume and increments the number of iterations each loop while the volume isn't divisble by 3 and more than or equal to 6
return the amount of iterations
*/
function musicalOCD(volume) {
    let i = 0
    do {
        volume += 2
        i++
    } while (!(volume % 3 === 0 && volume >= 6))
    return i
};
//TESTCASES--
console.log(musicalOCD(4), 1);
console.log(musicalOCD(80), 2);
console.log(musicalOCD(12), 3);