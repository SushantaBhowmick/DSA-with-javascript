console.log('Array Fundamentals')

const arr =[1,2,3,4,5]
const unSorrtedArr=[8,9,4,2,3,6,5,7]
const n = 10

// Add a number in Array End;
function InsertAtEnd(arr,n){
    arr[arr.length]=n;
    return arr;
}

function deleteFromEnd(arr){
    arr.length = arr.length-1;
    return arr;
}

function insertAtFront(arr,n){

    let arrLength=arr.length;

    for(let i=arrLength;i>0;i--){
        arr[i]=arr[i-1];
    };
    arr[0]=n;
    return arr;
}

function deleteFromFront(arr){
    let arrLength=arr.length;

    for(let i=0;i<arrLength;i++){
        arr[i]=arr[i+1]
    };
    arr.length=arr.length-1
    return arr;
}

function InsertAtIndex(arr,index,n){
    let arrLength=arr.length;

    for(let i=arrLength;i>index;i--){
        arr[i]=arr[i-1];
    };
    arr[index]=n;
    return arr;
}


function deleteAtIndex(arr,index){
    let arrLength=arr.length;

    for(let i=index;i<arrLength;i++){
        arr[i]=arr[i+1]
    };
    arr.length=arr.length-1
    return arr;
}

function length(arr){
    let count =0;
    let i =0;
   for(const element of arr){
    count++;
   }

    return count;
}

console.log(length(arr))



console.log("Real Arr:",arr)
console.log('InsertAtEnd',InsertAtEnd(arr,n));
console.log("deleteFromEnd",deleteFromEnd(arr));
console.log("InsertAtFront",insertAtFront(arr,n));
console.log('deleteFromFront',deleteFromFront(arr))
console.log('InsertAtIndex',InsertAtIndex(arr,3,n))
console.log('deleteAtIndex',deleteAtIndex(arr,3))
