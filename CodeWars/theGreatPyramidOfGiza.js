//URL--
// https://www.codewars.com/kata/58da3ef3ac2033ef630000ca

//INSTRUCTIONS--
/* The year is 2490 BC. It is the fourth dynasty in Ancient Egypt. You are the head of building and innovation for Pharaoh Khufu. He has asked you to build him the Great Pyramid of Giza. He wants to know how long it will take.

However Pharaoh Khufu has made you a deal. The faster you can build the pyramid, the bigger the bonus he will give you.

Your task is to create a function (buildPyramidTime) that returns the number of years it will take to build.
In order to calculate the number of years it will take to build the Great Pyramid, you must add two paremeters, (strength) + (skill) .

Once you know the total number of years via the (buildPyramidTime) function, you must then figure out and (return) what your bonus will be.

The terms of the deal with Pharaoh Khufu are as follows:

If you build the Great Pyramid in more than 15 years, your function will return "receive 3000 gold coins". If you build the Great Pyramid in 10-15 years , your function will return "receive 5000 gold coins". If you build the Great Pyramid in less than 10 years, your function will return "receive 10000 gold coins".

*/

//SOLUTION--
/* Add strength and skill to get build time
If the build time is less than 10, return "receive 10000 gold coins"
If the build time is less than or equal to 15, return "receive 5000 gold coins"
return "receive 3000 gold coins"
*/
function buildPyramidTime(strength, skill) {
    const buildTime = strength + skill
    if (buildTime < 10) {
        return "receive 10000 gold coins"
    }
    if (buildTime <= 15) {
        return "receive 5000 gold coins"
    }
    return "receive 3000 gold coins"
}
//TESTCASES--
console.log(buildPyramidTime(11, 6), "receive 3000 gold coins");
console.log(buildPyramidTime(9, 1), "receive 5000 gold coins");
console.log(buildPyramidTime(5, 2), "receive 10000 gold coins");