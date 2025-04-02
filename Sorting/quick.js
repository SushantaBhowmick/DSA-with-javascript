console.log("Quick Sort");

const arr = [-6, 20, 8, -2, 4];

function quickSort(arr){

    if(arr.length<=1) return arr;
    let left = [],right=[];
    let pivot = arr[arr.length-1]
    
    for (let i = 0; i < arr.length-1; i++) {
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

    // return [...quickSort(left), pivot, ...quickSort(right)];

return quickSort(left).concat(pivot,quickSort(right))

}

console.log(quickSort(arr))