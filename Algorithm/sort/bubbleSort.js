let arr = [20,10,5,7,30]

function bubbleSort(arr){
    for (let i = 0; i < arr.length-1; i++) {
        if(arr[i]<arr[i+1]){
           let temp = arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=temp;
        }
    }
    return arr;
}

// function bubbleSort(arr){
//     let temp;
//     for (let i = 0; i < arr.length-1; i++) {
//         for (let j = i; j < arr.length; j++) {
//             if(arr[i]>arr[j]){
//                 temp = arr[i];
//                 arr[i]=arr[j];
//                 arr[j]=temp;
//             }
//         }
//     }
//     return arr;
// }

console.log(bubbleSort(arr)
)