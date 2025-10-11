class rePatterns {
  constructor(n) {
    this.n = n;
  }

  square(x) {
    for (let i = 0; i < x; i++) {
      let row = " ";
      for (let j = 0; j < x; j++) {
        row += "* ";
      }
      console.log(row);
    }
  }
  triangle(x) {
    for (let i = 0; i < x; i++) {
      let row = " ";
      for (let j = 0; j <= i; j++) {
        row += "* ";
      }
      console.log(row);
    }
  }
  numberTriangle(x) {
    for (let i = 1; i <= x; i++) {
      let row = " ";
      for (let j = 1; j <= i; j++) {
        row += j + " ";
      }
      console.log(row);
    }
  }
  reapetNumberTriangle(x) {
    for (let i = 1; i <= x; i++) {
      let row = " ";
      for (let j = 1; j <= i; j++) {
        row += i + " ";
      }
      console.log(row);
    }
  }
  reversTriangle(x) {
    for (let i = x; i > 0; i--) {
      let row = " ";
      for (let j = 0; j < i; j++) {
        row += "* ";
      }
      console.log(row);
    }
  }
  reversNumberTriangle(x) {
    for (let i = x; i > 1; i--) {
      let row = " ";
      for (let j = 1; j <= i; j++) {
        row += j + " ";
      }
      console.log(row);
    }
  }
  pyramid(x) {
    for (let i = 1; i <= x; i++) {
      let row = "";

      for (let j = 5; j >= i; j--) {
        row += " ";
      }
      for (let j = 0; j < i; j++) {
        row += "* ";
      }
      console.log(row);
    }
  }
  reversePyramid(x) {
    for (let i = 1; i <= x; i++) {
      let row = "";
      for (let j = 0; j <= i; j++) {
        // console.log({row})
        row += " ";
      }
      for (let j = 5; j >= i; j--) {
        row += "* ";
      }
      console.log(row);
    }
  }
  Rhombos(x) {
    for (let i = 1; i <= x; i++) {
      let row = "";

      for (let j = 5; j >= i; j--) {
        row += " ";
      }
      for (let j = 0; j < i; j++) {
        row += "* ";
      }
      console.log(row);
    }
    for (let i = 1; i <= x; i++) {
      let row = "";
      for (let j = 0; j < i; j++) {
        row += " ";
      }
      for (let j = 5; j >= i; j--) {
        row += "* ";
      }
      console.log(row);
    }
  }
  reversePyramid(x) {
    for (let i = 1; i <= x; i++) {
      let row = "";
      for (let j = 0; j <= i; j++) {
        // console.log({row})
        row += " ";
      }
      for (let j = 5; j >= i; j--) {
        row += "* ";
      }
      console.log(row);
    }
  }
  bothTriangle(x) {
    for (let i = 1; i <= 2 * x - 1; i++) {
      let row = "";
      //   console.log({row},i)
      if (i <= x) {
        for (let j = 0; j < i; j++) {
          row += "* ";
        }
      } else {
        for (let j = 2 * x - i; j >= 1; j--) {
          row += "* ";
        }
      }

      console.log(row);
    }
  }
  mirrorNumberTriangle(x) {
    for (let i = 1; i <= x; i++) {
      let row = " ";
      for (let j = 1; j <= i; j++) {
        row += j + " ";
      }
      for (let j = 2 * x - i; j > i; j--) {
        // console.log(j)
        row += "  ";
      }
      for (let j = i; j >= 1; j--) {
        row += j + " ";
      }
      console.log(row);
    }
  }
  countTringle(x) {
    let count = 0;
    for (let i = 0; i <= x; i++) {
      let row = "";
      for (let j = 0; j < i; j++) {
        count++;
        row += count + " ";
      }
      console.log(row);
    }
  }
  alphabetsTriangle(x) {
    let alp = 65;
    for (let i = 0; i <= x; i++) {
      let row = "";
      for (let j = 0; j < i; j++) {
        row += String.fromCharCode(alp + j) + " ";
      }
      console.log(row);
    }
  }
  reverseAlphabetsTriangle(x) {
    let alp = 65;
    for (let i = x; i > 0; i--) {
      let row = "";
      for (let j = 0; j < i; j++) {
        row += String.fromCharCode(alp + j) + " ";
      }
      console.log(row);
    }
  }
  ReapeatAlphabetsTriangle(x) {
    let alp = 65;
    for (let i = 0; i < x; i++) {
      let row = "";
      for (let j = 0; j <= i; j++) {
        row += String.fromCharCode(alp + i) + " ";
      }
      console.log(row);
    }
  }
  odEvenTriangle(x) {
    let column = true;
    let rowN = true;
    for (let i = 0; i < x; i++) {
      let row = "";
      for (let j = 0; j <= i; j++) {
        if (rowN) {
          row += 1 + " ";
          rowN = !rowN;
        } else {
          row += 0 + " ";
          rowN = !rowN;
        }
      }
      column = !column;
      rowN = column;
      console.log(row);
    }
  }

  pyramidOfAlphabets(x) {
    for (let i = 1; i <= x; i++) {
      let alp = 65;
      let row = "";

      for (let j = 5; j >= i; j--) {
        row += "  ";
      }
      for (let j = 1; j <= 2 * i - 1; j++) {
        if (j < i) {
          row += String.fromCharCode(alp++) + " ";
        } else {
          row += String.fromCharCode(alp--) + " ";
        }
      }
      console.log(row);
    }
  }

  reverseAlphabetsTriangle(x) {
    let alp = 64;
    for (let i = x; i >= 1; i--) {
      let row = "";

      for (let j = i; j <= x; j++) {
        row += String.fromCharCode(alp + j) + " ";
      }
      console.log(row);
    }
  }
  starRhombos(x) {

    for (let i = x; i >0; i--) {
      let row = "";

      for (let j = 0; j <i; j++) {
        row+="* "
      }
      for (let j = 2*x-i; j >i; j--) {
        row+="  "
      }
    for (let j = 0; j <i; j++) {
        row+="* "
      }
      console.log(row);
    }

    for (let i = 1; i <=x; i++) {
      let row = "";

      for (let j = 0; j <i; j++) {
        row+="* "
      }
      for (let j = 2*x-i; j >i; j--) {
        row+="  "
      }
    for (let j = 0; j <i; j++) {
        row+="* "
      }
      console.log(row);
    }
  }
  reverseStarRhombos(x) {


    for (let i = 1; i <=x; i++) {
      let row = "";

      for (let j = 0; j <i; j++) {
        row+="* "
      }
      for (let j = 2*x-i; j >i; j--) {
        row+="  "
      }
    for (let j = 0; j <i; j++) {
        row+="* "
      }
      console.log(row);
    }

    for (let i = x-1; i >0; i--) {
      let row = "";

      for (let j = 0; j <i; j++) {
        row+="* "
      }
      for (let j = 2*x-i; j >i; j--) {
        row+="  "
      }
    for (let j = 0; j <i; j++) {
        row+="* "
      }
      console.log(row);
    }
  }
}

let x = 5;
const obj = new rePatterns(x);

// obj.square(x)
// obj.triangle(x)
// obj.numberTriangle(x)
// obj.reapetNumberTriangle(x)
// obj.reversTriangle(x)
// obj.reversNumberTriangle(x);
// obj.pyramid(x);
// obj.reversePyramid(x);
// obj.Rhombos(x);
// obj.bothTriangle(x);
// obj.mirrorNumberTriangle(x);
// obj.countTringle(x);
// obj.alphabetsTriangle(x);
// obj.reverseAlphabetsTriangle(x);
// obj.ReapeatAlphabetsTriangle(x);
// obj.odEvenTriangle(x);
// obj.pyramidOfAlphabets(x);
// obj.reverseAlphabetsTriangle(x);
// obj.starRhombos(x);
obj.reverseStarRhombos(x);
