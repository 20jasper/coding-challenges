//URL--
// https://www.codewars.com/kata/54edbc7200b811e956000556
 
//INSTRUCTIONS--
/* Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
*/ 
 
//SOLUTION--
/* I will check each value in the array to see if it is true
If an element is true, then add one to the amount of sheep
*/ 
function countSheeps(arrayOfSheep) {
    let sheepCount = 0;
    for (let i = 0; i<arrayOfSheep.length; i++) {
      if (arrayOfSheep[i]) {
        sheepCount+=1;
      }
    }
    return sheepCount;
  }
//TESTCASES--
console.log(countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ])); // 17
console.log(countSheeps([true])); // 1
console.log(countSheeps([])); // 0
console.log(countSheeps([false])); // 0
