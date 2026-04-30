console.log("Patterns");

class Pattern {
  constructor() {}

  square(n) {
    for (let i = 0; i < n; i++) {
      let row = "";
      for (let j = 0; j < n; j++) {
        row += "*";
      }
      console.log(row);
    }
  }
  triangle(n) {
    for (let i = 0; i < n; i++) {
      let row = "";
      for (let j = 0; j <= i; j++) {
        row += "*";
      }
      console.log(row);
    }
  }
  triangleNumber(n) {
    for (let i = 1; i <= n; i++) {
      let count = "";
      for (let j = 1; j <= i; j++) {
        count += j;
      }
      console.log(count);
    }
  }
  triangleNumberwithSameNumber(n) {
    for (let i = 1; i <= n; i++) {
      let count = "";
      for (let j = 1; j <= i; j++) {
        count += i;
      }
      console.log(count);
    }
  }
  reverseTriangle(n) {
    for (let i = n; i > 0; i--) {
      let row = "";
      for (let j = 1; j <= i; j++) {
        row += "* ";
      }
      console.log(row);
    }
  }
  reverseTriangleNumber(n) {
    for (let i = n; i > 0; i--) {
      let row = "";
      for (let j = 1; j <= i; j++) {
        row += j + " ";
      }
      console.log(row);
    }
  }
  pyramid(n) {
    for (let i = 1; i <= n; i++) {
      let row = "";
      for (let j = n; j > i; j--) {
        row += "  ";
      }
      // console.log("row",row)
      for (let k = 1; k <= i * 2 - 1; k++) {
        row += "* ";
      }
      console.log(row);
    }
  }
  reversePyramid(n) {
    for (let i = n; i >= 1; i--) {
      let row = "";
      // console.log("row",row)
      for (let j = n; j > i; j--) {
        row += "  ";
      }
      // console.log("row",row)
      for (let k = 1; k <= i * 2 - 1; k++) {
        row += "* ";
      }
      console.log(row);
    }
  }
  rombos(n) {
    for (let i = 1; i <= n; i++) {
      let row = "";
      for (let j = n; j > i; j--) {
        row += "  ";
      }
      // console.log("row",row)
      for (let k = 1; k <= i * 2 - 1; k++) {
        row += "* ";
      }
      console.log(row);
    }
    for (let i = n; i >= 1; i--) {
      let row = "";
      // console.log("row",row)
      for (let j = n; j > i; j--) {
        row += "  ";
      }
      // console.log("row",row)
      for (let k = 1; k <= i * 2 - 1; k++) {
        row += "* ";
      }
      console.log(row);
    }
  }

  bothSideTriangle(n) {
    for (let i = 0; i < n * 2 - 1; i++) {
      let row = "";
      if (i < n) {
        for (let j = 0; j <= i; j++) {
          row += "* ";
        }
      } else {
        for (let k = n - 1; k >=1; k--) {
          row += "* ";
        }
      }
      console.log(row);
    }
  }
}

const obj = new Pattern();

// obj.square(5)
// obj.triangle(5)
// obj.triangleNumber(5)
// obj.triangleNumberwithSameNumber(5)
// obj.reverseTriangle(5)
// obj.reverseTriangleNumber(5)
// obj.pyramid(5)
// obj.reversePyramid(5)
// obj.rombos(5)
obj.bothSideTriangle(5);
