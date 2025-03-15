function recursiveBinary(arr, t) {
  return search(arr, t, 0, arr.length - 1);
}

function search(arr, t, left, right) {
  if (left > right) return -1;

  let mid = Math.floor((left + right) / 2);
  console.log('left',left)
  console.log('right',right)

  if (arr[mid] === t) return mid;

  if (t < arr[mid]) {
    return search(arr, t, left, mid - 1);
  } else {
    return search(arr, t, mid + 1, right);
  }
}
let arr = [1, 5, 9, 10, 20, 50];
let t = 20;
console.log(recursiveBinary(arr, t));
