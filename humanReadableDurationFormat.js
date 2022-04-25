//URL--
// https://www.codewars.com/kata/52742f58faf5485cae000b9a

//INSTRUCTIONS--
/* Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

* For seconds = 62, your function should return 
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"

For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.
Detailed rules

The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

*/

//SOLUTION--
/* 
If the number of seconds is zero, return now
Create an empty array
If the amount of seconds is more than or equal to the amount of units in a unit, divide the amount of seconds down by the conversion rate and round down
Add this to the array
Then subtract the whole number of units times the conversion rate from the number of seconds
Repeat this until there are no more seconds left

Then if the array is 1 long, return the string inside

If the array is 2 long, return the strings joined by ' and '

If the array is longer than 2, return the first strings joined by ', ', and then join those with the final string by ' and '



*/
function formatDuration(seconds) {
    if (seconds == 0) {
        return 'now'
    }
    function secondsConversion(conversion) {
        const convertedValue = Math.floor(seconds / conversion)
        seconds -= convertedValue * conversion
        return convertedValue
    }
    function string(unit, number) {
        if (number == 1) {
            return `1 ${unit}`
        } if (number > 1) {
            return `${number} ${unit}s`
        }
    }
    //calculate numbers and add appropriate units
    const arr = []
    if (seconds >= 31536000) {
        let years = secondsConversion(31536000)
        arr.push(string("year", years))
    }
    if (seconds >= 86400) {
        let days = secondsConversion(86400)
        arr.push(string("day", days))
    }
    if (seconds >= 3600) {
        let hours = secondsConversion(3600)
        arr.push(string("hour", hours))
    }
    if (seconds >= 60) {
        let minutes = secondsConversion(60)
        arr.push(string("minute", minutes))
    }
    if (seconds > 0) {
        arr.push(string("second", seconds))
    }
    //join string together
    if (arr.length === 1) {
        return arr.join('')
    }
    if (arr.length === 2) {
        return arr.join(' and ')
    }
    if (arr.length > 2) {
        return `${arr.slice(0, -1).join(', ')} and ${arr.slice(-1)}`
    }
}

//TESTCASES--
console.log(formatDuration(0), "now");
console.log(formatDuration(1), "1 second");
console.log(formatDuration(62), "1 minute and 2 seconds");
console.log(formatDuration(120), "2 minutes");
console.log(formatDuration(3600), "1 hour");
console.log(formatDuration(3662), "1 hour, 1 minute and 2 seconds");
console.log(formatDuration(86402), "1 day and 2 seconds");
console.log(formatDuration(90062), "1 day, 1 hour, 1 minute and 2 seconds");
console.log(formatDuration(31626062), "1 year, 1 day, 1 hour, 1 minute and 2 seconds");