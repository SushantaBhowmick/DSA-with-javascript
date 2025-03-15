
const str="abcab";

function subStrings(str){
    let result =[];
    for (let i = 0; i < str.length; i++) {
       for (let j = i; j < str.length; j++) {
        result.push(str.slice(i,j+1))
       }
    }
    return result;
}

console.log(subStrings(str))