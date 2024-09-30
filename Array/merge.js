const arr = [5, 8, 9, 10, 2, 3,8];

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left,right);
}

function merge(left, right) {
  let result = [],
    l = 0,
    r = 0;

  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      result[result.length]=left[l++]
    } else {
      result[result.length]=right[r++];
    }
  }

  return result.concat(left.slice(l)).concat(right.slice(r));
}

console.log(mergeSort(arr));