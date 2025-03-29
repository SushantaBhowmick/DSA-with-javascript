Array.prototype.myIncludes = function (value) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === value) {
      return true;
    }
  }
  return false;
};

const arr = [1, 8, 3, 9, 6];

console.log(arr.myIncludes(3));

// bonus task

const obj = { a: 2, b: { c: 4 } };
const sallow = obj;
sallow.b.c = 6;
console.log(obj);
