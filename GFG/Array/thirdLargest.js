console.log("thirdLargest");

const arr = [12, 35, 1, 10, 34, 1];

function thirdLargest(arr) {

    let first = -Infinity;
    let second = -Infinity;
    let third = -Infinity;
    
    for (let i = 0; i < arr.length; i++) {
       if(arr[i]>first){
        third = second;
        second=first;
        first = arr[i]
       }else if(arr[i]<first && arr[i]>second){
        third = second;
        second = arr[i]
       }else if(arr[i]<second && arr[i]>third){
        third = arr[i]
       }
    }

    return third
}

console.log(thirdLargest(arr));