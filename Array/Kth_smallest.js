const arr= [7, 10, 4 ,20, 15], k = 4

// function Kth_Smallest(arr,k){
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = i; j < arr.length; j++) {
    //         if(arr[i]>arr[j]){
    //             [arr[i],arr[j]]=[arr[j],arr[i]]
    //         }
    //     }
        
    // }

//     return arr[k-1]
// }

class Solution {
    kthSmallest(arr, k) {
        
       for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if(arr[i]>arr[j]){
                [arr[i],arr[j]]=[arr[j],arr[i]]
            }
        }
        
    }
        return arr[k-1]
    }
}
// const arr= [7, 10, 4, 3, 20, 15], k = 3

const obj = new Solution;

console.log(obj.kthSmallest(arr,k))
