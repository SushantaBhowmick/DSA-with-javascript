// How do you find the missing number in a given integer array of 1 to 100?

const numbers = [
  1, 2, 3, 6, 7, 8, 9]
const ans = [];

for (let i = 0; i <= numbers.length; i++) {
//   console.log(i)
  if (i + 1 !== numbers[i]) {
    // ans[ans.length]=i+1
    return console.log(i+1);
    // i+1;
  }
}

console.log(ans);
