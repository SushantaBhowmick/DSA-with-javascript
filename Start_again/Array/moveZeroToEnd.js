
const arr =[ 0, 0, 1, 3, -2]
function moveZerosToEnd(arr=[]){
    let pos = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]!==0){
          [arr[pos],arr[i]]=[arr[i],arr[pos]]
          pos++
        }
    }
    return arr;
}

console.log(moveZerosToEnd(arr))