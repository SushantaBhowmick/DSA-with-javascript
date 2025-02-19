class Solution {

    // Note that the size of the array is n-1
    missingNumber(n, arr) {
        const sum_n=(n*(n+1))/2

        const sum_arr=arr.reduce((acc,curr)=>acc+curr,0)
        console.log(sum_arr)

        return sum_n-sum_arr
    }
}

const arr = [1,2,3,5]
const sol =new Solution()
console.log(sol.missingNumber(5,arr))