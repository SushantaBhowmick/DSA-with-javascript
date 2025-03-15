console.log("Bubble Sort");

const arr = [-6, 20, 8, -2, 4];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j =0; j < arr.length; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }
  console.log(arr)
  return arr;
}

bubbleSort(arr)