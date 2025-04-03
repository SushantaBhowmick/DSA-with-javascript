
const arr = [2,6,9,10,12,96,102]
let t = 102

function binarySearch(arr,t){
    let left = 0;
    let right = arr.length-1;
    while(left<=right){
        let mid = Math.floor((left+right)/2)
        console.log(mid)    
        if(arr[mid]===t){
            return [arr[mid],mid];
        }else{
            if(t<arr[mid]){
                right = mid-1;
            }else{
                left=mid+1;
            }
        }
    }
    return -1;
}

console.log(binarySearch(arr,t))