const express = require('express')
// const fact = require('./factorial/fact')
const cluster = require('cluster')
const os = require('os')

const prime = require('./prime/prime')


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



