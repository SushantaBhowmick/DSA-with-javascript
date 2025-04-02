console.log("binarySearch2");

const arr = [5, 6, 9, 10, 15, 28];
const tartget = 9;

function binarySearch(arr, t) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left+right)/2);
    if (arr[mid] === t) {
      return mid;
    } else {
      if (arr[mid] > t) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
  return -1
}


console.log(binarySearch(arr,tartget))