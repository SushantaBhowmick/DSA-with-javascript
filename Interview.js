// currying funcation 
// function add (a){
//     return function(b){
//         if(b){
//             return add(a+b);
//         };
//         return a;
//     }
// }

// console.log(add(1)(2)(3)())


//shallow copy
// const original = {a:1,b:{c:2}}
// const shallow = {...original}

// // shallow.b.c = 99

// deep = JSON.parse(JSON.stringify(original))
// deep.b.c = 98
// console.log(original.b.c)
// console.log(shallow.b.c)
// console.log(deep.b.c)


//call apply bind
// const person1 = {name:"Alice"};
// const person2 = {name:"Bob"};

// function greet(greeting,punctuation){
//     // console.log(greeting,punctuation)
//     console.log(`${greeting}, ${this.name}${punctuation}`)
// }

// //call
// greet.call(person1,"Hello","!");
// //apply
// greet.apply(person2,["Hi","."]);
// //bind
// const greetBob = greet.bind(person2,"hey");
// greetBob("?")


//prototype inheritance
// const animal = {
//     eats:true,
// }
// const rabits={
//     jumps:true,
// }

// rabits.__proto__ = animal;

// console.log(rabits.eats)
// console.log(rabits.jumps)


// polyfils

// Array.prototype.myMap = function(cb){
//     let temp =[];
//     for(let i =0;i<this.length;i++){
//         temp.push(cb(this[i],i,this))
//     }
//     return temp;
// }

// Array.prototype.myFilter=function(cb){
//     let temp=[];
//     for (let i = 0; i < this.length; i++) {
//         if(cb(this[i],i,this)){
//             temp.push(this[i])
//         }
//     }
//     return temp;
// }


// Array.prototype.myForEach=function(cb){
//     for (let i = 0; i < this.length; i++) {
//      cb(this[i],i,this)
//     }
// }

// Array.prototype.myReducer = function(cb,initialValue){
//     let accumulator = initialValue;
//     let startValue = 0;

//     if(accumulator ===undefined){
//         accumulator=this[0];
//         startValue= 1;
//     }

//     for (let i = startValue; i < this.length; i++) {
//         accumulator= cb(accumulator,this[i],i,this)
//     };
//     return accumulator;
// }

// let nums = [1, 2, 3];

// // let result = nums.myMap((num) => num * 2);
// let result = nums.myFilter((item,i)=>item===2 || item===3)
// // let result = nums.filter((item,i)=>item===2 || item===3)

// console.log(result);


