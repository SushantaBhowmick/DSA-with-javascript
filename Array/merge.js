const arr = [5, 8, 9, 10, 2, 3, 8];

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [],
    l = 0,
    r = 0;

  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      result.push(left[l]);
      l++;
    } else {
      result.push(right[r])
      r++;
    }
  }

  while(l<left.length){
    result.push(left[l])
    l++;
  }
  while(r<right.length){
    result.push(right[r])
    r++;
  }

  return result;

  // return result.concat(left.slice(l)).concat(right.slice(r));
}

console.log(mergeSort(arr));
