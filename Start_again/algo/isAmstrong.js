class Solution{
    isAmstrong(n){
        let ams = n;
        let digits = n.toString().length
        let res =0;
        while(ams>0){
          let rem = ams%10;
          res+=Math.pow(rem,digits);
          ams=Math.floor(ams/10)
        }
        return res===n;
    }
}

const obj = new Solution()
console.log(obj.isAmstrong(1634))
