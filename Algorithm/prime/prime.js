
function isPrime(n){
    if(n<2){
        return false
    }
    for (let i = 2; i <Math.sqrt(n); i++) {
        if(n%i===0){
            return false
        }
    }
    return true
}

const check = isPrime(73)

if(check){
    console.log("its a prime number")
}else{
    console.log("its not a prime number");
}


// function reverse(n){
//     let rem;
//     let res = 0;
//     while(n!=0){
//         rem = Math.floor(n%10) 
//         res=res*10+rem;
//         n=Math.floor(n/10)
//     }
//     return res;
// }
// console.log(reverse(521)
// )