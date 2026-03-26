

// const arr =[0,0,1,1,2,2,2,3,3,4]
const arr = [0, 0, 3, 3, 5, 6]

function removeDuplicate(arr){
    let len =arr.length;
    let duplicate = false;
    let obj ={};
    let result =[];
    for (let i = 0; i < len; i++) {
        if(obj[arr[i]]){
            duplicate=true;
        }else{
            obj[arr[i]]=true
            duplicate=false
        }

        if(!duplicate){
            result.push(arr[i])
        }
    }
    return result;
}

console.log(removeDuplicate(arr))