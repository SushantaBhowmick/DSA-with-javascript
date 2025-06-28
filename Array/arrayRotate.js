console.log("Array Rotation");

const arr = [1, 2,3, 4, 5];

function reverseArr(arr,start,end){
    while(start<end){
        [arr[start],arr[end]]=[arr[end],arr[start]];
        start++;
        end--;
    }
};

function leftRotate(arr,k){
    let n = arr.length;
    k=k%n
    reverseArr(arr,0,k-1)
    reverseArr(arr,k,n-1)
    reverseArr(arr,0,n-1);
    return arr;
}

function rightRotate(arr,k){
 let n = arr.length;
    k=k%n
    reverseArr(arr,n-k,n-1)
    reverseArr(arr,0,k)
    reverseArr(arr,0,n-1);
    return arr;
}
console.log("RealArr",arr)
// console.log("reverseArr",reverseArr(arr))
// console.log("leftRotate",leftRotate(arr,2))
console.log("rightRotate",rightRotate(arr,2))