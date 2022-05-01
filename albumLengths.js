//URL--
// https://www.codewars.com/kata/624e6b83c0da4c00314b6198

//INSTRUCTIONS--
/* Your task is to calculate the runtime of an album given an array of the lengths of its tracks. The format used for the track lengths and the albun runtime is HH:MM:SS. The input lengths will always match this format and your output is expected to do the same. For example, a track of 3 minutes and 16 seconds will be represented as 00:03:16.

You may assume that the album runtime will never exceed 99:59:59. If the album has no tracks, its runtime is 0 seconds.

albumLength(["00:07:00", "00:07:23", "00:08:30"]) //should return 00:22:53
albumLength(["00:02:16", "00:10:34", "00:23:12", "00:00:53", "00:06:35"]) //should return 00:43:30


*/

//SOLUTION--
/* I am going to use reduce to add up each length
    I will split each time by ':' and then add each value converted to seconds to the total
Then, I will convert the seconds into the amount of hours, minutes and seconds, and pad each number with 0s until it is 2 long
*/
function albumLength(trackLengths) {
    if (trackLengths.length == 0) {
        return "00:00:00"
    }
    let totalSeconds = trackLengths.reduce((sum, value) => {
        const arr = value.split(':')
        const seconds = Number(arr[2])
        const minutes = Number(arr[1])
        const hours = Number(arr[0])
        return sum + seconds + minutes * 60 + hours * 3600
    }, 0)
    const hours = Math.floor(totalSeconds / 3600)
    totalSeconds -= hours * 3600
    const minutes = Math.floor(totalSeconds / 60)
    totalSeconds -= minutes * 60
    function padStart(number) {
        return number.toString().padStart(2, '0')
    }
    return `${padStart(hours)}:${padStart(minutes)}:${padStart(totalSeconds)}`
}
//TESTCASES--
console.log(albumLength(["00:07:00", "00:07:23", "00:08:30"]), '00:22:53');
console.log(albumLength([]), "00:00:00");
console.log(albumLength(["00:59:59", "00:00:01"]), "01:00:00");