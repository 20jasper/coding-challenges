//URL--
// https://www.codewars.com/kata/56a2e3419f9e920186000004

//INSTRUCTIONS--
/* Define a class called Lamp. It will have attributes for color and state. Both attributes will be strings and pass into constructor as above order. Color will refer to the color of the lamp and state will be the string "on" if the lamp is on and "off" if the lamp is off. You'll need a way to construct a new instance of the class as well as ways to get and set the two attributes it has.
*/

//SOLUTION--
/* I am going to make a class called lamp with attributes of lamp and state
*/
class Lamp {
    constructor(color, state) {
        this.color = color
        this.state = state
    }
}
//TESTCASES--
let lamp
lamp = new Lamp("Red", "on")
console.log(lamp.color, lamp.state, 'Red', "on");
lamp = new Lamp("Blue", "off")
console.log(lamp.color, lamp.state, 'Blue', "off");