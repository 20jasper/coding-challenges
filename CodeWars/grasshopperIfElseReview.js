//URL--
// https://www.codewars.com/kata/57227b32785220c82b000b93

//INSTRUCTIONS--
/* Grasshopper if/else review

In the game you are creating, the role of the main function is to check the input and return a call to the appropriate function.

The preloaded function available are forward() and backward().

Two variables (FW_COUNT and BW_COUNT) are also predefined - don't touch them and don't worry about them!

The possible inputs and the required actions are:

    "forward": call the forward() function, and return its result
    "backward": call the backward() function, and return its result
    anything else: return "Not a valid input."


*/

//SOLUTION--
/* If the input is forward, return forward()
If the input is backward, return backward()
else return "Not a valid input."
*/
function main(input) {
    if (input === 'forward') {
        return forward()
    }
    if (input === 'backward') {
        return backward()
    }
    return "Not a valid input."
}
