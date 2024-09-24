class Solution{
    findFrequency(v, n, x){
    let count=0;
        for(let i =0;i<n;i++){
            if(x===v[i]){
                count++
            }
        }
        return count;
        
    }
}
const n = 5
const arr = [1, 0, 0, 0, 0]
const x = 1
const obj = new Solution();
console.log(obj.findFrequency(arr,n,x))