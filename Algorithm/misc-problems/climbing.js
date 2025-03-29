console.log("Climbing Staircase");

function climbingStraicase(n) {
  const noOfWays = [1, 2];
  for (let i = 2; i <= n; i++) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
  }
  return noOfWays[n - 1];
}

//2 ([1,1],[2])
console.log(climbingStraicase(1)); //1 ([1])
console.log(climbingStraicase(2)); //2 ([1,1],[2])
console.log(climbingStraicase(3)); //3 ([1,1,1],[1,2],[2,1])
console.log(climbingStraicase(4)); //5 ([1,1,1,1],[1,1,2],[1,2,1],[2,1,1],[2,2])
console.log(climbingStraicase(5))
console.log(climbingStraicase(6))
console.log(climbingStraicase(7))
console.log(climbingStraicase(8))