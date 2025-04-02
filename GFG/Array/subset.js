// class Solution{
//     isSubset(a1, a2, n, m){
//         let isCount=0;
//         for(let i=0;i<m;i++){
//             for(let j =0;j<n;j++){
//                 if(a2[i]===a1[j]){
//                     a1.splice(j,1)
//                     isCount++
//                     break;
//                 }
//             }
//         }
//         if(isCount===a2.length){
//             return "Yes"
//         }else{
//             return "No"
//         }
//     }
// }


function isSubset(a1, a2) {
    // Create a frequency map for array a1 to efficiently check for elements
    const frequencyMap = new Map();
    for (const element of a1) {
      frequencyMap.set(element, (frequencyMap.get(element) || 0) + 1);
    }
  
    // Iterate through array a2 and check if each element exists in the frequency map
    for (const element of a2) {
      if (!frequencyMap.has(element) || frequencyMap.get(element) === 0) {
        return false; // Element not found or frequency exhausted
      }
      frequencyMap.set(element, frequencyMap.get(element) - 1);
    }
  
    return true; // All elements in a2 were found in a1
  }
  
  // Example usage
  const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const a2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  if (isSubset(a1, a2)) {
    console.log("a2 is a subset of a1.");
  } else {
    console.log("a2 is not a subset of a1.");
  }