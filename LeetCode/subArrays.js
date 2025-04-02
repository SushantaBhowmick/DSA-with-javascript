const arr = [1, 2, 3, 1, 1, 4, 5];

function subArrays(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      result.push(arr.slice(i, j + 1));
    }
  }

  return result;
}

console.log(subArrays(arr));
// const ans = subArrays(arr)

// function getLongestSubArray(ans){
//     for (let i = 0; i < ans.length; i++) {

//     }
// }
