const arr = [1,2,3,4]
const str="Geeks"

let num=12346

// function reverseString(arr){
//     const str = Array.from(arr)
//     const rev = str.reverse()
//     return rev.join("").toString()
// }

// console.log(reverseString(str))


function reverseArr(arr){
    if(!Array.isArray(arr)){
        throw new TypeError("Input must bean array")
    }
    const ans = []
    for (let i = arr.length-1; i >=0; i--) {
        ans.push(arr[i])
    }
    console.log(ans)
    return ans
}

// reverseArr(arr)

function reverseNum(num){
    let rev=0;
    let rem;

    while(num!=0){
        rem=Math.floor(num%10)
        rev=rev*10+rem;
        num = Math.floor(num/10)
    }

    return rev;
}

// console.log(reverseNum(num))



function reverseStringTwoPointer(str) {
    let arr = str.split('');
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        // Swap characters
        console.log(arr[start])
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }

    return arr.join('');
}

// Example usage:
console.log(reverseStringTwoPointer("hello")); 