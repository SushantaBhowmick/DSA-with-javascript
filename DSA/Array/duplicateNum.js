console.log("Hi from duplicate numbers");
const array = [1, 2, 3, 2, 2, 2, 4, 5, 6];

function removeDeuplicate(arr) {
  let ans = [];

  for (let i = 0; i < arr.length; i++) {
    if (isExist(ans, arr[i])) {
      ans.push(arr[i]);
    }
  }
  return console.log(ans);
}

function isExist(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      return false;
    }
  }
  return true;
}

removeDeuplicate(array);
