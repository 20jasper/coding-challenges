//URL--
// https://www.codewars.com/kata/5c2575500b74434ded0000c3/

//INSTRUCTIONS--
/* Good news! Zephland, a high tech modern country, is accepting applications to become Zephlish resident. The immigration office will evaluate an applicant from several aspects:

• test score of the Zephlish language: range from 0-100, 3% of the score goes to the overall score;

• test score of Math: range from 0-100, 3% of the score goes to the overall score;

• criminal history: deduct 3 points if one has committed any crime;

• investment brought to Zephland: add 2 point if applicant brings over 1 million USD cash into the country;

• whether you are a programmer: add 2 points if you are a programmer;

Please write a function to check the overall score of an applicant. Return "Welcome to Zephland!", if score is over 6; "Sorry, your application is rejected." if score is 6 or under.
*/

//SOLUTION--
/* 
set score equal to 0
add zephilish score * .03 to score
add math score * .03 to score
if they have done crime, subtract 3 from score
add math score * .03 to score
If they have invested more than 1000000, add 2 to the score
If they are a programmer add 2 to the score
If the score is more than or equal to 6, return "Welcome to Zephland!"
return 'Sorry, your application is rejected.'
*/
function immigration(a) {
    let score = 0;
    score += a.Zephlish * 0.03
    score += a.Math * 0.03
    if (a.crime) {
        score -= 3
    }
    if (a.investment.slice(0, -3) * 1 >= 1000000) {
        score += 2
    }
    if (a.programmer) {
        score += 2
    }
    if (score >= 6) {
        return "Welcome to Zephland!"
    }
    return 'Sorry, your application is rejected.'
}
//TESTCASES--
console.log(immigration({ Zephlish: 67, Math: 90, crime: true, investment: '1000000USD', programmer: true }), "Sorry, your application is rejected.");
console.log(immigration({ Zephlish: 80, Math: 98, crime: false, investment: '10000USD', programmer: false }), "Sorry, your application is rejected.");
console.log(immigration({ Zephlish: 87, Math: 90, crime: false, investment: '9870000USD', programmer: true }), "Welcome to Zephland!")
