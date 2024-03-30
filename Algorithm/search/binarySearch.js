
let arr = [2,9,12,32,61,66,75,78,80,95];
let t = 32;

function binarySearch(arr,t){
    let left = 0;
    let right = arr.length-1;
    while(left<=right){
        let mid = Math.floor((left + right)/2);
        if(t===arr[mid]){
            return mid;
        }else{
            if(t<arr[mid]){
                right=mid-1;
            }else{
                left = mid+1;
            }
        }
        
    }
    return -1
}

console.log(binarySearch(arr,t))