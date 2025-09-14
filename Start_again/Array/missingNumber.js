
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
    
}