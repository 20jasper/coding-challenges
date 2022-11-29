//URL--
// https://www.codewars.com/kata/59f08f89a5e129c543000069

//INSTRUCTIONS--
/* 
You will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
dup(["kelless","keenness"]) = ["keles","kenes"].
Strings will be lowercase only, no spaces 

dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo'])
dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese'])
dup(["kelless","keenness"]), ['keles','kenes'])
*/ 

//SOLUTION--
/* 
Take in array of strings
return array of strings with duplicate chars in each string removed
Strings are always lowercase letters only
*/ 

function stringArrayDuplicates(arr){
	return arr.map(removeConsecutiveDuplicates)

	function removeConsecutiveDuplicates(string){
		let noDuplicates = ''
		
		for (let i = 0; i < string.length; i++) {
			
			if(string[i-1]!==string[i]){
				noDuplicates+=string[i]
			}
		}

		return noDuplicates
	}
}

module.exports = {stringArrayDuplicates}