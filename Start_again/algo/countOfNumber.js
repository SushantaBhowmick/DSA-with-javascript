class Solution {
  countDigit(n) {
    let count = 0;

    while (n > 0) {
      n = Math.floor(n / 10);
      count++;
    }
    console.log(count);
    return count;
  }
}

const obj = new Solution();
obj.countDigit(1234);
