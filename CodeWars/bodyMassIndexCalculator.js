//URL--
// https://www.codewars.com/kata/58db8adbb9f417c74b000049

//INSTRUCTIONS--
/* The body mass index (BMI) or Quetelet index is a value derived from the mass (weight) and height of an individual.

https://en.wikipedia.org/wiki/Body_mass_index

A function to work out the body mass index and associated BMI category.

w = weight in kg h = height in metres

BMI = w/h/h

Very severely underweight <=15

Severely underweight <=16

Underweight <=18.5

Normal (healthy weight) <=25

Overweight <=30

Moderately obese <=35

Severely obese <=40

Very severely obese >40

*/

//SOLUTION--
/* I am going to calculate the bmi and return the appropriate category based on the number
*/
function bmi(w, h) {
    const bmi = w / (h ** 2)
    if (bmi <= 15) {
        return "Very severely underweight";
    }
    if (bmi <= 16.0) {
        return "Severely underweight";
    }
    if (bmi <= 18.5) {
        return "Underweight";
    }
    if (bmi <= 25) {
        return "Normal (healthy weight)";
    }
    if (bmi <= 30) {
        return "Overweight";
    }
    if (bmi <= 35) {
        return "Moderately obese";
    }
    if (bmi <= 40) {
        return "Severely obese";
    }
    return "Very severely obese";
}
//TESTCASES--
console.log(bmi(50, 1.90), "Very severely underweight");
console.log(bmi(70, 1.80), "Normal (healthy weight)");
console.log(bmi(95, 1.80), "Overweight");
console.log(bmi(100, 1.80), "Moderately obese");
console.log(bmi(120, 1.60), "Very severely obese");