console.log("Array Fundamentals");

const arr = [1, 2,3, 4, 5];
const unSorrtedArr = [8, 9, 4, 2, 3, 6, 5, 7];
const n = 10;

// Add a number in Array End;
function InsertAtEnd(arr, n) {
  arr[arr.length] = n;
  return arr;
}

function deleteFromEnd(arr) {
  if (arr.length === 0) return arr;
  arr.length = arr.length - 1;
  return arr;
}

function insertAtFront(arr, n) {
  let arrLength = arr.length;

  for (let i = arrLength; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = n;
  return arr;
}

function deleteFromFront(arr) {
  let arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  return arr;
}

function InsertAtIndex(arr, index, n) {
  let arrLength = arr.length;

  for (let i = arrLength; i > index; i--) {
    arr[i] = arr[i - 1];
  }
  arr[index] = n;
  return arr;
}

function deleteAtIndex(arr, index) {
  let arrLength = arr.length;

  for (let i = index; i < arrLength; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  return arr;
}

function length(arr) {
  let count = 0;
  let i = 0;
  for (const element of arr) {
    count++;
  }

  return count;
}

function reverseArr(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr;
}

function arrOccurrences(arr,n){
    const arrLength =arr.length;
    let count =0;
    for(let i=0;i<arrLength;i++){
        if(arr[i]===n){
            count++;
        }
    }
    return count;
}

function rotateByLeftPosition(arr,k){
    const arrLength =arr.length;
    let temp;
    for(let i=0;i<k;i++){
        temp=arr[0]
        for(let j=0; j<arrLength-1;j++){
            arr[j]=arr[j+1];
        }
        arr[arr.length-1]=temp;
    }
    return arr;
}

function rotateByRightPosition(arr, k) {
  const arrLength = arr.length;
  let temp;
  for (let i = 0; i < k; i++) {
    temp = arr[arrLength - 1];
    for (let j = arrLength - 1; j > 0; j--) {
      arr[j] = arr[j - 1];
    }
    arr[0] = temp;
  }
  return arr;
}
// console.log(length(arr));
console.log("Real Arr:", arr);
console.log("InsertAtEnd", InsertAtEnd(arr, n));
console.log("deleteFromEnd", deleteFromEnd(arr));
console.log("InsertAtFront", insertAtFront(arr, n));
console.log("deleteFromFront", deleteFromFront(arr));
console.log("InsertAtIndex", InsertAtIndex(arr, 3, n));
console.log("deleteAtIndex", deleteAtIndex(arr, 3));
console.log("arrOccurrences",arrOccurrences(arr,n))
// console.log("rotateByLeftPosition",rotateByLeftPosition(arr,2))
// console.log("rotateByRightPosition",rotateByRightPosition(arr,2))
console.log("reverseArr", reverseArr(arr));
