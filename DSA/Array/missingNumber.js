// How do you find the missing number in a given integer array of 1 to 100?

const arr = [1,4,2,5]
const n = 5;

function missingNumber(arr,n){
    const mis = new Set(arr);
    for(let i=1;i<=n;i++){
       if(!mis.has(i)){
           return i;
       }
    }
    return undefined;
}

console.log("missing",missingNumber(arr,n))

// console.log(ans);
