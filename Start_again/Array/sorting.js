let arr = [7, 3, 4, 1, 5, 3];
let arr2 = [1,5,7, 3, 4, 1, 5, 3];

class Sorting {
  // constructor(n){
  //     this.n=n
  // }
  bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = i; j < len; j++) {
        let temp;
        if (arr[i] > arr[j]) {
          temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    console.log(arr);
    return arr;
  }
  mergeSort(arr) {
    if (arr.length < 2) return arr;
    let mid = Math.floor(arr.length) / 2;
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    return this.merge(this.mergeSort(left), this.mergeSort(right));
  }
  merge(left, right) {
    let res = [];
    let i = 0,
      j = 0;
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        res.push(left[i]);
        i++;
      } else {
        res.push(right[j]);
        j++;
      }
    }
    while (i < left.length) {
      res.push(left[i]);
      i++;
    }
    while (j < right.length) {
      res.push(right[j]);
      j++;
    }
    return res;
  }
}

const obj = new Sorting();
// obj.bubbleSort(arr);
// console.log(obj.mergeSort(arr))
console.log(obj.merge(arr,arr2))