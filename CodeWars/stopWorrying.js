//URL--
// https://www.codewars.com/kata/58555e3db45c01bada0001e0

//INSTRUCTIONS--
/* You are worried about the outcome of something major, e.g. a test or a job application. The input will be a string and your task is to return "Stop worrying, everything will be all right!" in the following conditions:

    "Making last-minute changes"
    "Sitting in a dark room and shaking"
    "Crying"
    "Laughing hysterically"
    "Not eating"

For any other input you should return: "Do you really care?"

*/

//SOLUTION--
/* If the input is "Making last-minute changes", "Sitting in a dark room and shaking", "Crying", "Laughing hysterically", or"Not eating"
    return "Stop worrying, everything will be all right!"
else, return "Do you really care?"
*/
function worries(str) {
    const phrases = ["Making last-minute changes", "Sitting in a dark room and shaking", "Crying", "Laughing hysterically", "Not eating"]
    if (phrases.includes(str)) {
        return "Stop worrying, everything will be all right!"
    }
    return "Do you really care?"
}
//TESTCASES--
console.log(worries("Making last-minute changes"), "Stop worrying, everything will be all right!");
console.log(worries("Making last-minute changes"), "Stop worrying, everything will be all right!");
console.log(worries(739845793847), "Do you really care?");