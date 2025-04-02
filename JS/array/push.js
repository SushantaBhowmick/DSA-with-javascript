
console.log("Console from Push method")


Array.prototype.myPush=function(...elements){
    let len = this.length; 
    for(let i=0;i<elements.length;i++){
        this[len]=elements[i];
        len++;
    }
    return this;

}

const arr= [{
    id:1,
    name:'Sushanta',
    age:22
}]
let obj={
    id:2,
    name:'Bhowmick',
    age:23
}
arr.myPush(obj)
// myPush(arr,1,2,3)

console.log(arr)
