class Solution {
  isPalinDrome(n) {
    let ans = n;
    let rev = 0;
    while (n > 0) {
      let rem = n % 10;
      rev = rev * 10 + rem;
      n = Math.floor(n / 10);
    }


    if(rev===ans){
        return true;
    }else{
        return false;
    }
  }
}

const obj = new Solution();
console.log(obj.isPalinDrome(1213))
