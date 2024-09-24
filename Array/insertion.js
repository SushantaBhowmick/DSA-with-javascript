
function insertionSort(arr) {
  let sort = [];
  for (let i = 0; i < arr.length; i++) {
    findIndex(sort, arr[i]);
  }
  return sort;
}

function findIndex(sort, newNum) {
  let position = -1;
  for (let i = 0; i < sort.length; i++) {
    if (sort[i] > newNum) {
      position = i;     break;
    }
  }

  if (position === -1) {
    sort[sort.length] = newNum;
  } else {
    for (let i = sort.length; i > position; i--) {
      sort[i] = sort[i - 1];
    }
    sort[position] = newNum;
  }

  return sort;
}

let arr = [12, 11, 13, 5, 6];
console.log(insertionSort(arr))


//another method
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let current = arr[i];
      let j = i - 1;
  
      // Shift elements of arr[0..i-1], that are greater than current, to one position ahead
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        console.log("while",arr)
        j = j - 1;
      }
      arr[j + 1] = current; // Place the current element at its correct position
      console.log("for",arr)
    }
    return arr;
  }
  
  console.log("sorted:",insertionSort(arr));