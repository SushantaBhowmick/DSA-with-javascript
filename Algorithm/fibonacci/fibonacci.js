//1st approch not completely right
// function fibonacci(n){
//     let ans=0;
//     let fb=[0,1];
//     for (let i = 0; i <=n; i++) {
//        ans = fb[i]+fb[i+1];
//        fb.push(ans)   
//     }
//     return fb;
// }
// console.log(fibonacci(7))

//2nd approch
function fibonacci(n){
    let fb=[0,1];
    for (let i = 2; i <n; i++) {
      fb[i]=fb[i-1]+fb[i-2]
    }
    return fb;
}
console.log(fibonacci(7))
