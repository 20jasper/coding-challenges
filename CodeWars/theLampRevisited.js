//URL--
// https://www.codewars.com/kata/570e6e32de4dc8a8340016dd

//INSTRUCTIONS--
/* Define a class called Lamp. It will have a string attribute for color and boolean attribute, on, that will refer to whether the lamp is on or not. Define your class constructor with a parameter for color and assign on as false on initialize.

Give the lamp an instance method called toggleSwitch that will switch the value of the on attribute.

Define another instance method called state that will return "The lamp is on." if it's on and "The lamp is off." otherwise.

*/

//SOLUTION--
/* I am going to make a class called Lamp
    I am going to define color and on properties in a constructor function
    color will be defined by the argument passed in, and on will be false
    I am going to define a method called toggleSwitch that sets the value of on to the opposite value
    I am going to define a method called state that returns a string 
        return "The lamp is on." if on is true
        Else return "the lamp is off."
*/
class Lamp {
    constructor(color) {
        this.color = color
        this.on = false
    }
    toggleSwitch() {
        this.on = !this.on
    }
    state() {
        if (this.on) {
            return `The lamp is on.`
        }
        return `The lamp is off.`
    }
}
//TESTCASES--
const myLamp = new Lamp("Blue")
console.log(myLamp.color, "Blue");
console.log(myLamp.on, false);
console.log(myLamp.state(), "The lamp is off.");
myLamp.toggleSwitch()
console.log(myLamp.state(), "The lamp is on.");