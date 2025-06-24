console.log("two-sum");

// const arr =[5,2,3,9,7,6]
const arr = [1, 2, 3, 5,7];
const target = 10;

function twoSum(arr, t) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let ans = arr[left] + arr[right];
    if (ans === t) {
      return [arr[left], arr[right]];
    } else if (ans > t) {
      right--;
    } else {
      left++;
    }
  }
  return -1;
}

console.log(twoSum(arr, target));
