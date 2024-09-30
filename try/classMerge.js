class Solution {
    kthSmallest(arr, k) {
       const sortedArr=this.sort(arr,k) 
       return sortedArr[k-1]
    }
    
    sort(arr){
            if(arr.length<2){
        return arr;
    }
    let mid = Math.floor(arr.length/2);
    let left =arr.slice(0,mid);
    let right =arr.slice(mid);
    return this.merge(this.sort(left),this.sort(right))
    }
        
    merge(left,right){
            let sort = [];
    while(left.length && right.length){
        if(left[0] <= right[0]){
            sort.push(left.shift())
        }else{
            sort.push(right.shift())
        }
    }
    console.log([...sort,...left,...right])
    return [...sort,...left,...right]
        }
}

const arr = [7, 10, 4, 3, 20, 15]
const ans = new Solution;
console.log(ans.kthSmallest(arr,3))