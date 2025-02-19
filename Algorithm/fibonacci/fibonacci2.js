console.log("fibonacci2.js");

function fibonacci2(n){
    let fib = [0,1]
    if(n<=2){
        return fib;
    }
    for (let i = 0; i < n-2; i++) {
        fib.push(fib[i]+fib[i+1])
    }
    return fib;
}

console.log(fibonacci2(3))