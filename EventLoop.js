
//1
// setTimeout(() => console.log("timeout"));
// console.log("1")

// setImmediate(() => console.log("immediate"));

// Promise.resolve().then(() => console.log("promise"));

// process.nextTick(() => console.log("nextTick"));


//2
// console.log("A");

// setTimeout(() => console.log("B"), 0);

// Promise.resolve().then(() => {
//   console.log("C");
// });

// console.log("D");


// Promise.resolve().then(() => {
//   console.log("1");
//   Promise.resolve().then(() => console.log("2"));
// });

// console.log("3");

//3
// setTimeout(() => console.log("timeout"));

// process.nextTick(() => console.log("nextTick"));

// Promise.resolve().then(() => console.log("promise"));

// 4
// console.log("start");

// setTimeout(() => console.log("timeout"));

// Promise.resolve().then(() => {
//   console.log("promise1");
// }).then(() => {
//   console.log("promise2");
// });

// console.log("end");




// Hard
// console.log("1");

// Promise.resolve().then(() => {
//   console.log("2");
//   process.nextTick(() => console.log("3"));
// });

// process.nextTick(() => console.log("4"));

// console.log("5");



// setTimeout(() => console.log("timeout"), 0);
// setImmediate(() => console.log("immediate"));


// console.log("start");

// setTimeout(() => console.log("timeout"));

// setImmediate(() => console.log("immediate"));

// Promise.resolve()
//   .then(() => {
//     console.log("promise1");
//     process.nextTick(() => console.log("nextTick"));
//   })
//   .then(() => console.log("promise2"));

// console.log("end");



// queueMicrotask(() => console.log("microtask"));

// Promise.resolve().then(() => console.log("promise"));

// setTimeout(() => console.log("timeout"));


// async function test() {
//   console.log("1");
//   await null;
//   console.log("2");
// }

// console.log("3");

// test();

// console.log("4");


// async function a() {
//   console.log("A1");
//   await b();
//   console.log("A2");
// }

// async function b() {
//   console.log("B1");
// }

// console.log("start");
// a();
// console.log("end");


// console.log("1");

// setTimeout(() => console.log("2"));

// Promise.resolve().then(() => {
//   console.log("3");
//   process.nextTick(() => console.log("4"));
// });

// process.nextTick(() => console.log("5"));

// console.log("6");


// async function test() {
//   console.log("1");
//   await null;
//   console.log("2");
// }

// console.log("3");
// test();
// console.log("4");



// async function a() {
//   console.log("A1");
//   await Promise.resolve();
//   console.log("A2");
// }

// a();

// Promise.resolve().then(() => console.log("P"));

// console.log("END");



// Promise.resolve().then(() => {
//   console.log("1");
//   Promise.resolve().then(() => console.log("2"));
// });

// Promise.resolve().then(() => console.log("3"));




// nothing will print 
// function loop() {
//   process.nextTick(loop);
// }

// loop();

// setTimeout(() => console.log("timeout"), 0);




// async function foo() {
//   console.log("1");
//   await bar();
//   console.log("2");
// }

// async function bar() {
//   console.log("3");
// }

// console.log("4");
// foo();
// console.log("5");





