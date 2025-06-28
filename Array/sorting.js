console.log("Array Sorting");

const arr = [1, 2, 3, 4, 5];
const unSorrtedArr = [8, 9, 4, 2, 3, 6, 5, 7];
const n = 10;

function bubbleSort(arr) {
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    for (let j = i; j < arrLength; j++) {
        if(arr[i]>arr[j]){
            [arr[i],arr[j]]=[arr[j],arr[i]]
        }
    }
  }
  return arr;
}


function mergeSort(arr){
    if(arr.length<=1) return arr;
    let mid = Math.floor((arr.length)/2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid));

    return merge(left,right)
}

function  merge(left,right){
    let result=[];
    let i=0;
    let j=0;

    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
            result.push(left[i])
            i++;
        }else{
            result.push(right[j])
            j++;
        }
    };

    while(i<left.length){
        result.push(left[i])
        i++;
    }
    while(j<right.length){
        result.push(right[j])
        j++;
    }
    return result;
}

console.log("Real Arr:", unSorrtedArr);
// console.log("bubbleSort",bubbleSort(unSorrtedArr))
console.log("mergeSort",mergeSort(unSorrtedArr))
