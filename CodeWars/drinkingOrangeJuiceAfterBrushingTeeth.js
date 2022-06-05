//URL--
// https://www.codewars.com/kata/607067f18c0349001b3f4fd2

//INSTRUCTIONS--
/* Drinking Orange Juice After Brushing Teeth

Have you ever had a glass of Orange Juice after brushing your teeth? If the pH of your mouth is still affected by the toothpaste, it can make the OJ taste terrible. How long do you have to wait to drink a glass of OJ after brushing your teeth?

Create a function that returns a string that tells you how many minutes you have to wait to drink OJ after brushing your teeth. The function will take two parameters. One is how much toothpaste is used to brush your teeth, and the other is the flavor of toothpaste used (some flavors may make the toothpaste taste last longer.)

    Minty-Fresh takes 37 minutes per g of toothpaste.

    Lemon-Sage takes 15 minutes per g of toothpaste.

    Fruit-Fusion takes 24 minutes per g of toothpaste.

For example:

calcWaitForOJ('Minty-Fresh', 1)

should return "It's safe to drink OJ after 37 minutes."

All answers should return minutes as the nearest whole number.

If no toothpaste was used, it should return "It's safe to drink OJ now."

*/

//SOLUTION--
/* 
If no toothpaste is used or the type of toothpaste is undefined, return "It's safe to drink OJ now."
Else, make an object with the types of toothpaste and their corresponding multiplyers
return `It's safe to drink OJ after ${multiplyer*amount} minutes.`
*/
function calcWaitForOJ(flavor, amount) {
    const multiplyers = {
        'Minty-Fresh': 37,
        'Lemon-Sage': 15,
        'Fruit-Fusion': 24,
    }
    const multiplyer = multiplyers[flavor]
    if (amount === 0 || multiplyer === undefined) {
        return "It's safe to drink OJ now."
    }
    return `It's safe to drink OJ after ${Math.round(multiplyer * amount)} minutes.`
}
//TESTCASES--
console.log(calcWaitForOJ('Minty-Fresh', 1), "It's safe to drink OJ after 37 minutes.");
console.log(calcWaitForOJ('Lemon-Sage', 3), "It's safe to drink OJ after 45 minutes.");
console.log(calcWaitForOJ('Minty-Fresh', 0), "It's safe to drink OJ now.");
console.log(calcWaitForOJ('', 1), "It's safe to drink OJ now.");