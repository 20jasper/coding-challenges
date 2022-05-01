//URL--
// https://www.codewars.com/kata/554e4a2f232cdd87d9000038

//INSTRUCTIONS--
/* Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"

dnaStrand []        `shouldBe` []
dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]


*/

//SOLUTION--
/* 
I will make an object of DNA compliments
I am going to split the string into an array, then I will replace each letter with the appropriate compliment from the map
Then I will join the array back into a string

*/
function DNAStrand(dna) {
    return dna.split('').map(x => x.replace(x, Pairs[x])).join('')
}
const Pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
}

//TESTCASES--
console.log(DNAStrand("AAAA"), "TTTT");
console.log(DNAStrand("ATTGC"), "TAACG");
