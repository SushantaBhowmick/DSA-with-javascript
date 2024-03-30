
function insertionSort(arr){
for (let i = 1; i < arr.length; i++) {
    let insertValue = arr[i];
    let j = i-1;;
    while(j>=0 && arr[j]>insertValue){
        arr[j+1]=arr[j];
        j=j-1;
    }
    arr[j+1]=insertValue;
}
}

// let arr = [-6,20,8,-2,4];
let arr = [57,20,89,100,2,1];

insertionSort(arr)

console.log(arr)

