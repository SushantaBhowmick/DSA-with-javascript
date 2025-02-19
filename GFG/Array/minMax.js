class Solution {
    getMinMax(arr) {
        let minMax=this.quickSort(arr);
        return minMax[0],minMax[minMax.length-1]
    }
    
    quickSort(arr){
        if(arr.length<=1) return arr;
        
        let pivot=arr[arr.length-1];
        let left=[];
        let right=[];
        
        for(let i=0;i<arr.length-1; i++){
            if(arr[i]>pivot){
                right.push(arr[i])
            }else{
                left.push(arr[i])
            }
        }
        
        return [...this.quickSort(left),pivot,...this.quickSort(right)]
    }
}


let arr = [3, 2, 1, 56, 1000, 167]
const solution = new Solution()
console.log(solution.getMinMax(arr))