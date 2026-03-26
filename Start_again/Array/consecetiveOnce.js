let nums = [1, 1, 0, 0, 1, 1, 1, 0]

function consucetiveOnce(arr){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]===0){
            [arr[i],arr[arr.length-1]]=[arr[arr.length-1],arr[i]]
        }
    }
    console.log(arr)
return arr;
}
consucetiveOnce(nums)