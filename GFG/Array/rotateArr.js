

class Solution {
    rotate(arr) {
       arr.unshift(arr[arr.length-1])
       arr.pop()
       return arr
    }
}

let arr = [1, 2, 3, 4, 5]

let sol = new Solution()
console.log(sol.rotate(arr))