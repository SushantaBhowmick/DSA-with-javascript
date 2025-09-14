class Patterns {
  constructor(n) {
    this.n = n;
  }
  Square(x) {
    for (let i = 0; i < x; i++) {
      let row = "";
      for (let j = 0; j < x; j++) {
        row += "* ";
      }
      console.log(row.trim());
    }
  }

  Triangle(x) {
    for (let i = 0; i < x; i++) {
      let row = "";
      for (let j = 0; j <= i; j++) {
        row += "* ";
      }
      console.log(row.trim());
    }
  }

  NumberTriangle(x) {
    for (let i = 1; i <= x; i++) {
      let row = "";
      for (let j = 1; j <= i; j++) {
        row += j + " ";
      }
      console.log(row.trim());
    }
  }

  RepeatNumberTriangle(x) {
    for (let i = 1; i <= x; i++) {
      let row = "";
      for (let j = 1; j <= i; j++) {
        row += i + " ";
      }
      console.log(row.trim());
    }
  }
  ReverseTriangle(x) {
    for (let i = x; i >= 1; i--) {
      let row = "";
      for (let j = 1; j <= i; j++) {
        row += "* ";
      }
      console.log(row.trim());
    }
  }
  ReverseNumberTriangle(x) {
    for (let i = x; i >= 1; i--) {
      let row = "";
      for (let j = 1; j <= i; j++) {
        row += j + " ";
      }
      console.log(row.trim());
    }
  }

  Pyramid(x) {
    for (let i = 1; i <=x; i++) {
      let row = '';
      //space
      for (let j = 1; j<=x-i; j++) {
        row += '  ';
      }
      //star
      for (let k = 1; k <= i; k++) {
        row+='* '
      }
    //   //space
    //   for (let l = 1; l<x-i;l++) {
    //     row+=" "
    //   }
      console.log(row.trim());
    }
  }
}

const obj = new Patterns(4);

// obj.Square(5)
// obj.Triangle(5)
// obj.NumberTriangle(5)
// obj.RepeatNumberTriangle(5);
// obj.ReverseTriangle(5);
// obj.ReverseNumberTriangle(5);
obj.Pyramid(5);
