//URL--
// https://www.codewars.com/kata/57f222ce69e09c3630000212
 
//INSTRUCTIONS--
/* For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

*/ 

//SOLUTION--
/* I am going to iterate throught the array and add one to a counter any time there is a good idea
If the counter is 0 return 'Fail!'
If the counter is 1-2 I will return 'Publish!'
if there are more than 2 return 'I smell a series!'

My reduce was not working since I was incrementing the value after returning it instead of before
*/ 
function well(x){
    const counter = x.reduce((counter,x)=> x==='good' ? ++counter : counter, 0);
    if (counter===0){
      return 'Fail!'
    } 
    if (counter===1 || counter===2){
      return 'Publish!'
    } else return 'I smell a series!'
  }
//TESTCASES--
console.log(well(['bad', 'bad', 'bad'])) //'Fail!'
console.log(well(['good', 'bad', 'bad', 'bad', 'bad'])) //'Publish!'
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])) //'I smell a series!'