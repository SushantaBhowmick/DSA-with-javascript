// import { reverse } from "../GFG/string/reverseString";
const reverse = require('../GFG/string/reverseString')

const arr=[1,2,5,8,9];


function reverseArr(arr){
    let ans=[];
    for (let i = arr.length-1; i >= 0; i--) {
       ans.push(arr[i])
    }
    return ans;
}
// console.log(reverseArr(arr))



function reverseNumber(num){
    let rev=0;
    while(num!=0){
        let rem =num%10;
        rev=rev*10+rem
        num=Math.floor(num/10)
    }
    return rev;
}
const num=121
// console.log(reverseNumber(nums))
function isPalinDrome(num){
    const rev = reverseNumber(num);
    if(rev===num){
        return true;
    }else{
        return false
    }
}
// console.log(isPalinDrome(num))

function isPalinDromeStr(str){
    const rev = reverse(str);
    if(rev===str){
        return true;
    }else{
        return false
    }
}
const str ="aba"
console.log(isPalinDromeStr(str))