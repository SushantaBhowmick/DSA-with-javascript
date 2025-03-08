let arr1 = [1, 5, 7];
let arr2 = [3, 6, 8];

 function mergeTwoSortedArray(arr1, arr2) {
  let result = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while(i<arr1.length){
    result.push(arr1[i])
    i++;
  }

  while(j<arr2.length){
    result.push(arr2[j])
    j++;
  }
  

  return result;

//   return result.concat(arr1.slice(i)).concat(arr2.slice(j));
}


console.log(mergeTwoSortedArray(arr1,arr2))