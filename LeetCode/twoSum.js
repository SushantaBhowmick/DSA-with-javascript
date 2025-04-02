// var twoSum = function(nums, target) {

//     for(let i=0;i<=nums.length;i++){
//         for(let j=i+1;j<=nums.length;j++){
//             if(nums[i]+nums[j]===target){
//             return [i, j]
//         }
//         }
//     }
// };;

function twoSum(nums, target) {
  let map = new Map();

  for (let i = 0; i <= nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }
  return [-1, -1];
}

let nums = [9, 8, 2, 5, 7, 9, 8];
let target = 9;
console.log(twoSum(nums, target));
