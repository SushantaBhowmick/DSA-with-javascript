let arr = [10, 80, 30, 90, 40]

function quickSort(arr){

    if(arr.length<=1){
        return arr;
    }

    let pivot = arr[arr.length-1]
    let left = [];
    let right = [];
    
    for (let i = 0; i < arr.length-1; i++) {
        if(arr[i]>pivot){
            // right.push(arr[i])
            right[right.length]=arr[i]
            console.log("r",right)
        }else{
            // left.push(arr[i])
            left[left.length]=arr[i]
            console.log("l",right)
        }          
    }

    return [...quickSort(left),pivot,...quickSort(right)]
 
}

console.log(quickSort(arr))