//1st approch
function factorial(n){
    let fact =1;

    for (let i = n; i > 0; i--) {
       fact=fact*i; 
    }
    return fact;
}
console.log(factorial(5))

//2nd approch
function factorial2(n){
    let fact =1;

    for (let i = 2; i <=n; i++) {
        fact=fact*i
    }
    return fact;
}
console.log(factorial2(5))


