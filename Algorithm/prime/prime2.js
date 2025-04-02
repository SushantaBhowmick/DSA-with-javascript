console.log('Hiii from prime2')

function checkPrime(n){
   if(n===1&& n===2){
    return console.log("Number is Prime")
   }
   
   for (let i = 2; i <= n/2; i++) {
    if(n%i===0){
        return false
    }
}
return true;
}


function primeNumbers(n){
    let primeNumbers=[];

for (let i = 2; i <=n; i++) {
    let check = checkPrime(i)
    if(check){
        primeNumbers.push(i)
    }
}

return console.log(primeNumbers)

}


primeNumbers(50)
