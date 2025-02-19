console.log("Console from POP method")

Array.prototype.myPop = function(){
    if(arr.length===0) return;
    let len = arr.length-1;
    this.length=len;
    return this;

}


let arr= [5,8,9,3]

arr.myPop()

console.log(arr)

