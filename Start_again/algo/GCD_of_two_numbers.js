

class Solutions{
    GCD(a,b){
      while(b!==0){
        let temp = b;
        b=a%b;
        a=temp;
      }
      return a;
    }
}

const obj = new Solutions();
console.log(obj.GCD(48,18))