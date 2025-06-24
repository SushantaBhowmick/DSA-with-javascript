function x() {
  let counter = 0;
  function y() {
    counter++;
    console.log(counter);
  }
  return y;
}

// let count = 0;
// function x() {
//   count++;
//   console.log(count);
// }
// x()
// x()
// x()

// const counter = x();
// counter();
// counter();

function loop() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log("Hello bro")
}
loop();
