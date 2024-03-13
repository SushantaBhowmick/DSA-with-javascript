// function isPowerOfTwo(n){
//     for (let i = 0; i <n; i++) {
//         if(Math.pow(2,i)===n){
//             return true;
//         }
//     }
//     return false
// }

// function isPowerOfTwo(n){
//     if(n<1){
//         return false
//     }
//   while(n>1){
//     if(n%2!==0){
//         return false
//     }
//     n=n/2;
//   };
//   return true;
// }


//bitwise operation
function isPowerOfTwo(n){
    if(n<1){
                return false
            }
    return (n & (n-1))===0;
}

console.log(isPowerOfTwo(2))
console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(1024))