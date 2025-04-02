console.log("Hi form Fact2")


function factorial(n){
    let fact = 1;
    for (let i = n; i > 0; i--) {
        fact=fact*i
    }
    console.log(fact)
    return fact;
}

factorial(5)
