
const arr = [10,80,30,50,90,40];

function quickSort(arr){
    if(arr.length<2){
        return arr;
    }
    let left = []
    let right = []
    let pivot = arr[arr.length-1]
    for (let i = 0; i < arr.length-1; i++) {
       if(pivot>arr[i]){
        left.push(arr[i])
       }else{
        right.push(arr[i])
       }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}
console.log(quickSort(arr))