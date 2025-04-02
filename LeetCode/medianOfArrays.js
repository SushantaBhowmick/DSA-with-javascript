const nums1 = [1, 2];
const nums2 = [3, 4, 5];

// let mergedArr= [...nums1,...nums2];
let mergeSorts = mergeTwoSortedArray(nums1, nums2);
let arrLen = mergeSorts.length;
if (arrLen % 2 === 0) {
  let ans = Math.floor(arrLen / 2);
  let res = (mergeSorts[ans] + mergeSorts[ans - 1]) / 2;
  console.log(res);
  return res;
} else {
  let ans = Math.floor(arrLen / 2);
  console.log(mergeSorts[ans]);
  return mergeSorts[ans];
}

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

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;

  //   return result.concat(arr1.slice(i)).concat(arr2.slice(j));
}
