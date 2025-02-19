const express = require('express')
const cluster = require('cluster')
const os = require('os')

// const prime = require('./prime/prime')
// const fact = require('./factorial/fact')
// const prime = require('./fibonacci/recursiveFibo')
// const prime = require('./factorial/recursiveFact')
// const js = require('./JS/scope')
// const obj = require('./JS/object')
// const arr = require('./JS/arrays')

// const arrMethods = require('./JS/array/array')
// const dsaArr = require('./DSA/Array/arrayManage')

// const lcs = require('./DSA/String/string')
// const LinkedList = require('./DSAv /LinkedList/LinkedList')

// const pow = require('./pow')
// const gcd = require('./gcd')
const fibonacci2  = require('./Algorithm/fibonacci/fibonacci2')


const app = express()
const Port = 4000;

// if(cluster.isPrimary){
//     console.log(`Primary ${process.pid} is running`)

//     //for workers
//     for(let i =0;i<=os.cpus().length;i++){
//         cluster.fork()
//     }
//     cluster.on('exit',(worker,code,signal)=>{
//         console.log(`worker ${worker.process.pid} died`);
//     })
// }else{
//     app.listen(Port,()=>{
//         console.log(`Worker ${process.pid} started`);
//     })
// }

app.listen(Port,()=>{
    console.log(`Worker ${process.pid} started port ${Port}`);
})



