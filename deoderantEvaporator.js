//URL--
// https://www.codewars.com/kata/5506b230a11c0aeab3000c1f
 
//INSTRUCTIONS--
/* This program tests the life of an evaporator containing a gas.

We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.

The program reports the nth day (as an integer) on which the evaporator will be out of use.
*/ 
 
//SOLUTION--
/* I am going to solve for the nth day by using the formula threshold/100 = content(1-evap_per_day)^n
I solved for n to get ln(threshold/(100*content))/ln(1-evap_per_day/100) = n
Then I will round up to the nearest whole number
*/ 
function evaporator(content, evap_per_day, threshold){ 
    return Math.ceil(Math.log(threshold/100)/Math.log(1-evap_per_day/100));
  }
  
  //TESTCASES--
   console.log(evaporator(10,10,10)) //22
   console.log(evaporator(10, 10, 5)) //29
   console.log(evaporator(10, 10, 100)) //0