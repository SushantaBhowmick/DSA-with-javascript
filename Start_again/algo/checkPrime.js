
class Solution{
    isPrime(n){
        for (let i = 2; i < n/2; i++) {
           if(n%i===0){
            return false;
           }
        }
        return true;
    }
}

const obj = new Solution();
console.log(obj.isPrime(11))