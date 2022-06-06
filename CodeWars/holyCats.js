//URL--
// https://www.codewars.com/kata/58ebfa6ef7cda1a3d4000048/

//INSTRUCTIONS--
/* My granny has several cats. Most of them are wicked, some are normal and some of them are the likes of ^(~_~)^ aka holy cats. So my granny asked me to separate the holy cats from the rest of the crew. But I don't know how to do it. Can you help me separate the holy cats from the rest? In case there are no holy cats in the group, return an empty array.
*/

//SOLUTION--
/* I am going to filter the array
    filter anything that is "wicked" or "normal" out of the array
return the resultant array
*/
function holycats(input) {
    return input.filter(cat => cat !== 'wicked' && cat !== "normal");
}
//TESTCASES--
console.log(holycats(['wicked', 'normal', `^(~_~)^`, `"(^_^)"`, `*(^_^)*`]), [`^(~_~)^`, `"(^_^)"`, `*(^_^)*`]);