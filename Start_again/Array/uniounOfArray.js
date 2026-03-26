

let  nums1 = [1, 2, 3, 4, 5], nums2 = [1, 2, 7]

function unionOfTwoSortedArray(arr,arr2){
    let arrLen=arr.length;
    let arr2Length=arr2.length;
    let len = arrLen>arr2Length ? arrLen :arr2Length;
    let left=0 , right=0
    let result =[]
   while(left<arrLen || right <arr2Length){
    if(arr[left]===arr2[right]){
        result.push(arr2[right]);
        left++;
        right++;
    }else{
        if(arr2[right]){
            result.push(arr2[right])
            right++;
        }else{
            result.push(arr[left])
            left++;
        }
    }
   };
   console.log(result)
   return result;
}

unionOfTwoSortedArray(nums1,nums2)