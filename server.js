const express = require('express')
const cluster = require('cluster')
const os = require('os')

// const dsaArr = require('./DSA/Array/arrayManage')
// const Algorithm = require('./Algorithm/algoServer')
// const Leetcode = require('./LeetCode/LeetCodeServer')
const arryServer =require('./Array/arrayServer')
// const sortingServer =require('./Sorting/sortingServer')
// const miscServer =require('./Algorithm/misc-problems/miscServer')
// const JsArr = require('./JS/JSArr.server')
// const gfgArray = require('./GFG/Array/arrayServer')
// const Practice = require('./Practice/server')

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



