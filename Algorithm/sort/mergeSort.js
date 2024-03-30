
let arr = [38,12,27,25,10];

function mergeSort(arr){
    if(arr.length<2){
        return arr;
    }
    let mid = Math.floor(arr.length/2);
    let left =arr.slice(0,mid);
    let right =arr.slice(mid);
    console.log("left",left)
    console.log("right",right)
    return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right){
    let sort = [];
    while(left.length && right.length){
        if(left<=right){
            sort.push(left.shift())
        }else{
            sort.push(right.shift())
        }
    }
    console.log(sort,left,right)
    return [...sort,...left,...right]
}
console.log(mergeSort(arr))