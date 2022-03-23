//URL--
// https://www.codewars.com/kata/52685f7382004e774f0001f7
 
//INSTRUCTIONS--
/* Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

    HH = hours, padded to 2 digits, range: 00 - 99
    MM = minutes, padded to 2 digits, range: 00 - 59
    SS = seconds, padded to 2 digits, range: 00 - 59

The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

*/ 
 
//SOLUTION--
/* 
I will divide the total seconds by 60 and set the remainder to the seconds
Then I will convert the total seconds to minutes and then divide that by 60 and set the remainder to minutes
Then I will convert the total seconds to hours and set that to hours
Then I will pad any single digit number with one 0
Then I will return their values with the format HH:MM:SS

I needed to convert the numbers to strings before padding them
*/ 
function humanReadable (seconds) {
    let s = seconds%60
    let m = Math.floor(seconds/60)
    m = m%60
    let h = Math.floor(seconds/3600)
    s = String(s).padStart(2, 0);
    m = String(m).padStart(2, 0);
    h = String(h).padStart(2, 0);
    return `${h}:${m}:${s}`;
  }

//TESTCASES--
 console.log(humanReadable(0)) //'00:00:00'
 console.log(humanReadable(3)) //'00:00:03'
 console.log(humanReadable(63)) //'00:01:03'
 console.log(humanReadable(3599)) //'00:59:59'
 console.log(humanReadable(3603)) //'01:00:03'
 console.log(humanReadable(359999)) //'99:59:59'