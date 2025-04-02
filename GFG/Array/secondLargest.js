console.log("secondLargest");

const arr = [12, 35, 1, 10, 34, 1];

function secondLargest(arr) {
  if (arr.length < 2) {
    return -1;
  }

  let first = -Infinity;
  let second = -Infinity;


  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] < first && arr[i] > second) {
      second = arr[i];
    }
  }
  return second === -Infinity ? -1 : second;
}

console.log(secondLargest(arr));
