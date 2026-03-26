const arr = [1, 2, 3, 4, 5];

function isSorted() {
  let len = arr.length;
  let isSort = true;
  for (let i = 0; i < len; i++) {
    if (isSort) {
      if (arr[i] < arr[i - 1]) {
        return false;
      }
    }
  }
  return isSort;
}
console.log(isSorted(arr));
