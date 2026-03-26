// Find maximum element
const arr = [1, 5, 3, 9, 2];

// function findMax(arr){
//     const arrlength = arr.length;
//     let max = -Infinity;
//     for(let i =0;i<arrlength; i++){
//         if(max<=arr[i]){
//             max = arr[i]
//         }
//     }
//     console.log(max)
//     return max;
// }

// findMax(arr)

// funcation has an default arguments
// function showArgs(){
//     console.log(arguments)
// }

// showArgs(1,2,3,4)

// function findEvenOdd(arr) {
//   const arrlength = arr.length;
//   let oddEven = {even:0,odd:0}
//   for(let i =0;i<arrlength;i++){
//     if(arr[i]%2==0){
//       oddEven.even++
//     }else{
//       oddEven.odd++;
//     }
//   }

//   console.log(oddEven)
//   return oddEven;
// }

// findEvenOdd(arr)

// let str = 'string'
function reverseString(str) {
  let strLenth = str.length - 1;
  let res = "";
  for (let i = strLenth; i >= 0; i--) {
    res += str[i];
  }
  return res;
}

// reverseString(str)

// function isPrime(n) {
//   if (n < 2) return false;
//   let len = Math.sqrt(n);
//   for (let i = 2; i <= len; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// function primeNumbers(n) {
//   let prime = [];

//   for (let i = 2; i <= n; i++) {
//     if (isPrime(i)) {
//       prime.push(i);
//     }
//   }

//   return prime;
// }
// console.log(primeNumbers(10));

// function fibonacci(n){
//   let ans = [0,1];
//   for (let i = 2; i < n; i++) {
//     ans.push(ans[i-1]+ans[i-2])

//   }
//   console.log(ans)
//   return ans;
// }

// fibonacci(5)

// let arr2 = [10, 5, 20, 8]

// function secondLargestNumber(arr){
//   let first = -Infinity;
//   let second = -Infinity;

//   let len = arr.length;

//   for (let i = 0; i < len; i++) {
//    if(first<arr[i]){
//      second=first;
//     first=arr[i];
//    }else if (first>arr[i] && second<arr[i]){
//     second=arr[i]
//    }
//   }

//   console.log(first,second)
//   return {first,second}
// }

// function secondSmallestNumber(arr){
//   let first = +Infinity;
//   let second = +Infinity;

//   let len = arr.length;

//   for (let i = 0; i < len; i++) {
//    if(first>arr[i]){
//      second=first;
//      first=arr[i];
//    }else if (first<arr[i] && second>arr[i]){
//     second=arr[i]
//    }
//   }

//   console.log(first,second)
//   return {first,second}
// }

// secondLargestNumber(arr2)
// secondSmallestNumber(arr2)

//funcation reverse number
// function reverse(n) {
//   let rev = 0;
//   while (n !== 0) {
//     let rem = n % 10;
//     rev = rev * 10 + rem;
//     n = Math.floor(n / 10);
//   }
//   return rev;
// }

// //palindrome number and string
// function palindromeNumber(n) {
//   if (n === reverse(n)) {
//     return true;
//   } else {
//     return false;
//   }
// }
// function palindromeString(str) {
//   if (str === reverseString(str)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// // console.log(palindromeNumber(121))
// // console.log(palindromeString('sus'))

// //factorial number
// function factorialNumber(n) {
//   let ans = 1;
//   for (let i = 1; i <= n; i++) {
//     ans *= i;
//   }
//   return ans;
// }

// // factorialNumber(6)

// //sum of digits
// function sumOfDigits(n) {
//   console.log(String(n).split(" "));
//   return String(n)
//     .split("")
//     .reduce((acc, digit) => acc + Number(digit), 0);
// }

// // console.log(sumOfDigits(123))

// // Bubble sort
// // let arr3 = [5, 1, 4, 2]
// //   function bubbleSort(arr){

// //     let len = arr.length
// //     for (let i = 0; i < len; i++) {
// //       for (let j = i; j < len; j++) {
// //         let temp;
// //         if(arr[i]>arr[j]){
// //         temp =arr[i];
// //         arr[i] = arr[j]
// //         arr[j]=temp;
// //         }

// //       }
// //     }
// //     console.log(arr)
// //     return arr;
// //   }

// //   bubbleSort(arr3)

// const mergeArry = [5, 8, 9, 10, 2, 3, 8];
// //merge sort
// function mergeSort(arr) {
//   if (arr.length <= 1) return arr;
//   let mid = Math.floor(arr.length / 2);
//   let left = mergeSort(arr.slice(0, mid));
//   let right = mergeSort(arr.slice(mid));

//   return merge(left, right);
// }

// function merge(left, right) {
//   let result = [];
//   let l = 0;
//   let r = 0;

//   while (l < left.length && r < right.length) {
//     if (left[l] < right[r]) {
//       result.push(left[l]);
//       l++;
//     } else {
//       result.push(right[r]);
//       r++;
//     }
//   }

//   while (l < left.length) {
//     result.push(left[l]);
//     l++;
//   }
//   while (r < right.length) {
//     result.push(right[r]);
//     r++;
//   }

//   return result;
// }

// console.log(mergeSort(mergeArry));
// console.log(merge([1, 3], [2, 4]));

// function getFrequency(arr) {
//     return arr.reduce((acc, curr) => {
//         acc[curr] = (acc[curr] || 0) + 1;
//         return acc;
//     }, {});
// }

// function frequesncyOfElement(arr){
//   const res = {};
// let len = arr.length
//   for (let i = 0; i < len; i++) {
//     if(res[arr[i]]){
//       res[arr[i]]++;
//     }else{
//       res[arr[i]]=1
//     }
//   }
//   return res;
// }

// console.log(getFrequency(['a', 'b', 'a']))

// function missingNumber(arr,n){

//   for (let i = 0; i < n; i++) {

//   }

// }

// function GetSumOfOddNumbersFromTwoArray(arr,arr2){
//   let ans = [...arr, ...arr2].filter((item,i)=>item%2!==0).reduce((acc,cum)=>acc+cum,0)

//   console.log(ans)
// }

// GetSumOfOddNumbersFromTwoArray([1, 2, 3],[4, 5, 6])

// function isAnagram(s1,s2){
//   if(s1.length !== s2.length) return false;

//   return s1.split('').sort().join('') === s2.split('').sort().join('')
// }

// function isAnagram(s1, s2) {
//   if (s1.length !== s2.length) return false;

//   const count ={};

//   for(let char of s1){
//     count[char] = (count[char]||0)+1
//   }
//   console.log(count)
//   for(let char of s2){
//     if(!count[char]) return false;
//     count[char]--;
//     console.log(count)
//   }

//   return true;
// }

// console.log(isAnagram("listen","silent"))

const rd = [1, 2, 2, 3];

function removeDuplicate(arr) {
  const obj = {};
  let ans = [];
  let isDuplicae = false;
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    if (obj[arr[i]]) {
      isDuplicae = true;
    } else {
      obj[arr[i]] = true;
      isDuplicae = false;
    }
    if (!isDuplicae) {
      ans.push(arr[i]);
    }
  }

  return ans;
}

console.log(removeDuplicate(rd));
