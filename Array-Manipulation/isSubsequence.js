function isValidSubsequence(array, sequence) {
   let firstP = 0;
   let secondP = 0;

   while (array[firstP] && sequence[secondP]) {
       let currNumArray = array[firstP];
       let currNumSeq = sequence[secondP];

       if (currNumArray === currNumSeq) {
           firstP++;
           secondP++;
       } else {
           firstP++;
       }
   }

   if (sequence[secondP]) {
       return false;
   } else {
       return true;
   }

  }

// Time: O(n)
// Space: O(1)

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])); // true
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [22, 25, 6])); // true
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 25, 6, -1, 8, 10, 12])); // false
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 25, 22, 6, -1, 8, 10])); // false
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, -1])); // false
