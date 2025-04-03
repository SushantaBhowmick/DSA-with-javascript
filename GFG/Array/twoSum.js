console.log("two sum");

function twoSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
    let sum = arr[left] + arr[right]

    if(sum===target){
        return [left,right]
    }else if(sum<target){
        left++;
    }else{
        right--;
    }
  }
  return -1;
}

const target = 10;
const arr = [1, 2, 3, 7, 5];
console.log(twoSum(arr, target));
