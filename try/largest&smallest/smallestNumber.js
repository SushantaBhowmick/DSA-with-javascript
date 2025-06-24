const arr = [102, -35, 18, 10, -34, 1, -130];

function smallestNumber(arr) {
  let first = +Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < first) {
      first = arr[i];
    }
  }
  return first === +Infinity ? -1 : first;
}

function secondSmallest(arr) {
  let first = +Infinity;
  let second = +Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > first && arr[i] < second) {
      second = arr[i];
    }
  }
  return second === +Infinity ? -1 : second;
}

function thirdSmallest(arr) {
  let first = +Infinity;
  let second = +Infinity;
  let third = +Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < first) {
      third = second;
      second = first;
      first = arr[i];
    } else if (arr[i] > first && arr[i] < second) {
      third = second;
      second = arr[i];
    }else if(arr[i]>second && arr[i]<third){
        third =arr[i]
    }
  }
  return [first,second,third]
//   return third === +Infinity ? -1 : third;
}

console.log(thirdSmallest(arr));
