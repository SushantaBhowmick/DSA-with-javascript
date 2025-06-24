

console.log("Start")

function x(cb){
    console.log("cb 1")
    cb()
}
x(function say(){
    console.log("cb 2")
})

setTimeout(()=>{
    console.log("cb 3")
},100)

console.log("End")