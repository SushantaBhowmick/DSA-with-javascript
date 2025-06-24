const arr = [12, 35, 18, 10, 34, 1, 13];

function largestNumber(arr) {
  let first = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      first = arr[i];
    }
  }
  return first === -Infinity ? -1 : first;
}

// secondLargest
function secondLargest(arr) {
  let first = -Infinity;
  let second = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] < first && arr[i] > second) {
      second = arr[i];
    }
  }
  return second === -Infinity ? -1 : second;
}

// thirdLargest
function ThirdLargest(arr) {
  let first = -Infinity;
  let second = -Infinity;
  let third = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      third = second;
      second = first;
      first = arr[i];
    } else if (arr[i] < first && arr[i] > second) {
      third = second;
      second = arr[i];
    } else if (arr[i] < second && arr[i] > third) {
      third = arr[i];
    }
  }
  return third === -Infinity ? -1 : third;
}

// fourthLargest
function fourthLargest(arr) {
  let first = -Infinity;
  let second = -Infinity;
  let third = -Infinity;
  let fourth = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
        fourth=third;
      third = second;
      second = first;
      first = arr[i];
    } else if (arr[i] < first && arr[i] > second) {
        fourth = third;
      third = second;
      second = arr[i];
    } else if (arr[i] < second && arr[i] > third) {
        fourth=third;
      third = arr[i];
    }else if(arr[i]<third && arr[i]>fourth){
        fourth = arr[i]
    }
  }
  return fourth === -Infinity ? -1 : fourth;
}

console.log(fourthLargest(arr));
