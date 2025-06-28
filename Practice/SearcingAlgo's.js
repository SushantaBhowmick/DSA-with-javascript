
console.log("Search algo")

const arr =[2,58,9,3,8];
const element = 9;

function search(arr,e){
    for(let i =0;i<arr.length;i++){
        if(arr[i]===e){
            return [i,arr[i]]
        }
    }
    return false;
}

console.log(search(arr,element))