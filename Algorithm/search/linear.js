console.log("Hello from linear");

const arr = [5, 9, 7, 8, 1, 3, 6, 4];
const tartget = 11;

function linearSearch(n,t){
    for (let i = 0; i <= n.length; i++) {
       if(arr[i]===t){
        return i;
       }
    }
    return -1
}

console.log(linearSearch(arr,tartget))