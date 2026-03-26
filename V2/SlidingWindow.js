console.log("Welcome to sliding Window");

// 1. Given an array, find the average of all contiguous subarrays of size K in it.
// const arr = [1, 3, 2, 6, -1, 4, 1, 8, 2];
// let k = 5;

// brute force
// function SubArrayAvg(arr, k) {
//   let result = [];
//   let len = arr.length;
//   if (k > len) return result;
//   for (let i = 0; i < len-k+1; i++) {
//     let sum = 0;
//     for (let j = i; j < i+k; j++) {
//       sum += arr[j];
//     }
//     result.push(sum / k);
//   }
//   return result;
// }

//sliding window
// function SubArrayAvg(arr,k){
//     let result =[];
//     let len = arr.length;
//     let windowSum =0;
//     let windowStart =0;

//     for (let windowEnd = 0; windowEnd < len; windowEnd++) {
//        windowSum+=arr[windowEnd];

//        if(windowEnd >= k-1){
//         result.push(windowSum/k)

//         windowSum-=arr[windowStart];

//         windowStart++;

//        }

//     }
//     return result;
// }
// console.log(SubArrayAvg(arr, k));

// Maximum Sum Subarray of Size K (easy)
// let arr=[2, 1, 5, 1, 3, 2]
// let k =3;
// function maximumOfSubArray(arr,k){
//     let sum = 0;
//     let windowSum = 0;
//     let len = arr.length;
//     let result =[];
//     let windowStart = 0;

//     for (let i = 0; i < len; i++) {
//         windowSum+=arr[i];

//         if(i>=k-1){
//             result.push(windowSum);
//             if(sum<windowSum){
//                 sum=windowSum
//             }
//             windowSum-=arr[windowStart]
//             windowStart++;
//         }
//     };
//     return {sum,result};
// };

// console.log(maximumOfSubArray(arr,k))

//Smallest Subarray with a given sum
// const arr = [2, 1, 10, 2, 3, 2];
// let sum = 5;
// function SmallesSubArrayAnSum(arr, s) {
//   let minLength = Infinity;
//   let windowStart = 0;
//   let len = arr.length;
//   let windowSum = 0;

//   for (let windowEnd = 0; windowEnd < len; windowEnd++) {
//     windowSum += arr[windowEnd];

//     while (windowSum >= s) {
//       minLength = Math.min(minLength, windowEnd - windowStart + 1);
//       windowSum -= arr[windowStart];
//       windowStart++;
//     }
//   }
//   return minLength === Infinity ? 0 : minLength;
// }

// console.log(SmallesSubArrayAnSum(arr, sum));

// Longest Substring with K Distinct Characters (medium)
// function LongestSubstringWithKdistict(str,k){
//   let windStart =0;
//   let len = str.length;
//   let obj = {};
//   let maxLength = 0;

//   for(let windowEnd = 0; windowEnd<len; windowEnd++){
//     let endChar = str[windowEnd];
//     if(!(endChar in obj)){
//       obj[endChar]=0;
//     }
//     obj[endChar]++
// console.log(obj)
//     while(Object.keys(obj).length> k){
//       const startChar = str[windStart];
//       obj[startChar]--;

//       if(obj[startChar]===0){
//         delete obj[startChar]
//       }
//       windStart++;
//     }
//     maxLength=Math.max(maxLength, windowEnd - windStart+1)
//   };
//   console.log(obj)
//   return maxLength;
// }

// console.log(LongestSubstringWithKdistict('araaci',2))
// console.log(LongestSubstringWithKdistict('araaci',1))
// console.log(LongestSubstringWithKdistict('cbbebi',3))

//  Longest Substring Without Repeating Characters(leet code)

// function LongestSubstring(str) {
//   let windowStart = 0;
//   let len = str.length;
//   let obj = {};
//   let maxLength = 0;

//   for (let windowEnd = 0; windowEnd < len; windowEnd++) {
//     const endChar = str[windowEnd];
//     if (endChar in obj) {
//       windowStart = Math.max(windowStart, obj[endChar] + 1);
//     }

//     obj[endChar] = windowEnd;
//     maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
//   }
//   return maxLength;
// }

function LongestSubstring(str){
  let len = str.length;
  let maxLength=0;
  let windStart=0;
  let obj = {};

  for (let windowEnd = 0; windowEnd < len; windowEnd++) {
   let endChar = str[windowEnd];
   if(endChar in obj){
    windStart=Math.max(windStart,obj[endChar]+1)
   }
   obj[endChar]=windowEnd
   maxLength=Math.max(maxLength,windowEnd-windStart+1)
  }
  console.log(obj)
  console.log(maxLength)
}

console.log(LongestSubstring("abcabcdbb"));

// Fruits into Baskets
// function FruitsIntoBasket(arr) {
//   let maxLength = 0;
//   let len = arr.length;
//   let obj = {};
//   let windowStart = 0;

//   for (let windowEnd = 0; windowEnd < len; windowEnd++) {
//     const endFruits = arr[windowEnd];
//     if (!(endFruits in obj)) {
//       obj[endFruits] = 0;
//     }
//     obj[endFruits]++;
//     console.log(obj);
//     while (Object.keys(obj).length > 2) {
//       let startChar = arr[windowStart];
//       obj[startChar]--;

//       if (obj[startChar] === 0) {
//         delete obj[startChar];
//       }
//       windowStart++;
//     }

//     maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
//   }

//   return maxLength;
// }

// const fruits = ["A", "B", "C", "A", "C"];
// console.log(FruitsIntoBasket(fruits));
