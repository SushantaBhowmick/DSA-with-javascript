// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler




// console.log(arr,k)

function findAvgOfSubArray(arr,k){
    let windowSum = 0;
    let result = [];
    let len = arr.length;
    let windowStart = 0;
    
    for(let windowEnd =0;windowEnd<len; windowEnd++){
        windowSum +=arr[windowEnd];
        
        if(windowEnd >=k-1){
            result.push(windowSum/k);
            windowSum -=arr[windowStart]
            windowStart++;
        }
    }
    return result;
}
// console.log(findAvgOfSubArray(arr,k))



// Maximum Sum Subarray of Size K
function maximumOfSubArray(arr,k){
    let windowStart = 0;
    let windowSum = 0;
    let result=[];
    let len = arr.length;
    let maxSum =0

    for (let windowEnd = 0; windowEnd < len; windowEnd++) {
        windowSum+=arr[windowEnd];
        if(windowEnd>=k-1){
           maxSum=Math.max(maxSum,windowSum)
        windowSum-=arr[windowStart];
        windowStart++;
       }
    };
    return maxSum;
}

// maximumOfSubArray(arr,2)
// maximumOfSubArray(arr,3)

// function smallestSubarrayWithGivenSum(arr,s){
//     let windowStart=0;
//     let minLength = Infinity;
//     let len = arr.length;
//     let windowSum = 0;

//     for (let windowEnd = 0; windowEnd < len; windowEnd++) {
//       windowSum += arr[windowEnd];

//       while(windowSum>=s){
//         minLength=Math.min(minLength,windowEnd-windowStart+1);
//         windowSum-=arr[windowStart]
//         windowStart++; 
//       }
//     }
// console.log(minLength)

//     return minLength === Infinity ? 0: minLength
// }
// const arr= [2, 1, 5, 2, 3, 2]; const k=5

// smallestSubarrayWithGivenSum(arr,7)



// function longestSubstringWithKdistinct(str,k){

//     let strLen = str.length;
//     let windowStart =0;
//     let obj = {}
//     let maxLength = 0;


//     for (let windowEnd = 0; windowEnd < strLen; windowEnd++) {
//         const endChar = str[windowEnd]
//       if(!(endChar in obj)){
//         obj[endChar]=0
//       }  
//       obj[endChar]++;

//       while(Object.keys(obj).length>k){
//         let startChar = str[windowStart];
//         obj[startChar]--
//         if(obj[startChar]===0){
//             delete obj[startChar]
//         }
//         windowStart++;
//       }
//       maxLength= Math.max(maxLength, windowEnd-windowStart +1)
//     }
//     return maxLength;
    
// }

// console.log(longestSubstringWithKdistinct('araaci',2))
// console.log(longestSubstringWithKdistinct('araaci',1))




// two sum

function twoSum(arr,s){
 let start=0;
 let end = arr.length-1;

 while(start<end){
    let cSum = arr[start] +arr[end];
    if(cSum===s){
        return [start,end]
    }

    if(cSum<s){
        start++;
    }else{
        end--;
    }
 }
 return 0;
}


// console.log(twoSum([1,2,8],10))


function removeDuplicates(arr){
    let duplicate = false;
    let obj ={};
    let result =[];

    for (let i = 0; i < arr.length; i++) {
        let startNum = arr[i]
            if(obj[startNum]){
                duplicate=true;
            }else{
                duplicate=false
                obj[startNum]=true
            }

            if(!duplicate){
                result.push(startNum)
            }
        
    }
    return result;
}


console.log(removeDuplicates([1,2,2,5,6,8,2]))


    function removeAllElement(arr,key){
        let nonRepetative
    }