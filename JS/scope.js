// local scope

// global scope

//funciton scope

// let a = 30;
// var b = 40;
// const c = 50;

function b(){
    var a =20;
    console.log("Inner",a)
}
if (true) {
    let c = 40;
}
b()
// console.log("Outer",a)
console.log("Outer",c)