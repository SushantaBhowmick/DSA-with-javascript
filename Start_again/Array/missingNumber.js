
// # not optimized
function missingNumber(arr){
    const length = arr.length;
    for(let i =1;i<=length;i++){
        if(!arr.includes(i)){
            return i
        }
    }
    return false
} 

const arr = [1, 2, 4, 6, 3, 8, 5]

console.log(missingNumber(arr))


function missingNumber2(arr){
    let n = arr.length+1;
    let actualTotal =0;
    let expectedTotal = (n*(n+1))/2
    for (let i = 0; i < n-1; i++) {
        actualTotal+=arr[i]        
    }
    return expectedTotal - actualTotal
}

console.log(missingNumber2(arr))