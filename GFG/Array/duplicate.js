

    class Solution {

        duplicates(a, n) {
            let ans=[];
            let result=new Map();
            
            for(const element of a){
                    result.set(element, (result.get(element) || 0) + 1);
            }
            for(const [key,count] of result){
                console.log(key,count)
                if(count>1){
                    ans.push(key)
                }
            }

            return ans.length>0? ans.sort((a,b)=>a-b):[-1]
            
        }
    }

//    class Solution{
//     duplicates(arr,n){
//         let ans=[];
//         let result=[];
//         for (const element of arr) {
//             if(ans.includes(element)){
//                 if(!result.includes(element)){
//                     result.push(element)
//                 }
//             }else{
//                 ans.push(element)
//             }
//         }
//         if(!result.length){
//             return [-1];
//         }
//         else{
//             return result.sort((a,b)=>a-b)
//         }
//     }
//    } 

    const arr = [
        11, 12, 70, 37, 30, 63, 49, 12, 32, 63, 12, 51, 64, 45, 8, 67, 34, 1, 17, 
        67, 55, 23, 11, 42, 65, 73, 41, 67, 67, 53, 29, 28, 49, 36, 38, 34, 21, 
        55, 14, 55, 33, 33, 23, 48, 14, 14, 1, 41, 4, 10, 37, 16, 61, 73, 18, 24, 
        73, 51, 57, 23, 32, 66, 7, 63, 61, 24, 18, 9
      ];

const sol = new Solution()
console.log(sol.duplicates(arr,arr.length))