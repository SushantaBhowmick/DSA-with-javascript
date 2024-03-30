let a = 98; 
let b = 56;


// function GCD(a,b){
//     if(b===0){
//         return a
//     }
//     let arr1 = []
//     let arr2 = []
//     for (let i = 1; i <=a/2; i++) {
//       if(a%i===0){
//         arr1.push(i)
//       }
//     }
//     for (let i = 1; i <=b/2; i++) {
//       if(b%i===0){
//         arr2.push(i)
//       }
//     }
//     // return [ arr1,arr2]
//     const result =  arr1.filter(num=>arr2.includes(num))
//     return result[result.length-1]
// }


// another approch using recursion
function GCD(a,b){
    if(b===0){
        return a;
    }
    return GCD(b,a%b)
}
console.log(GCD(a,b))
