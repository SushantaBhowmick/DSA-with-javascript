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
    for (let i = 0; i <x; i++) {
      let row = '';
      //space
      for (let j = 0; j<=x-i; j++) {
        row += '  ';
      }
      //star
      for (let k = 0; k <(2*i+1); k++) {
        row+='* '
      }
      console.log(row);
    }
  }
   ReversPyramid(x) {
    for (let i = x; i >0; i--) {
      let row = '';
      //space
      for (let j = 0; j<x-i; j++) {
        row += '  ';
      }
      //star
      for (let k = 0; k <(2*i+1); k++) {
        row+='* '
      }
      console.log(row);
    }
  }

  Rombos(x){
      for (let i = 0; i <x; i++) {
      let row = '';
      //space
      for (let j = 0; j<x-i; j++) {
        row += ' ';
      }
      //star
      for (let k = 0; k <(2*i+1); k++) {
        row+='*'
      }
    }
     for (let i = x; i >=0; i--) {
      let row = '';
      //space
      for (let j = 0; j<x-i; j++) {
        row += ' ';
      }
      //star
      for (let k = 0; k <(2*i+1); k++) {
        row+='*'
      }

    }
  }

  mergeTriangle(x){
    for (let i = 0; i < x; i++) {
      let row =""
     for (let j = 0; j <= i; j++) {
     row+="* "
     }
     console.log(row.trim())
    }
     for (let i = x; i >1; i--) {
      let row =""
     for (let j = 1; j < i; j++) {
     row+="* "
     }
     console.log(row.trim())
    }
  }

  oddEvenTriangle(x){
    let isOdd = true;
    let insideOdd= true;
    for (let i = 1; i <= x; i++) {
      isOdd=!isOdd;
      insideOdd=isOdd;
      let row =""
      for (let j = 1; j <= i; j++) {
        if(insideOdd){
          row+=0+" ",
          insideOdd=!insideOdd
        }else{
           row+=1+" ",
          insideOdd=!insideOdd
        }
      }
      console.log(row)
    }
  }
  countTriangle(x){
    let count = 0;
    for (let i = 1; i <= x; i++) {
      let row =""
      for (let j = 1; j <= i; j++) {
        count++
       row+=count+" "
      }
      console.log(row)
    }
  }
  mirrorTriangle(x){
    for (let i = 1; i <= x; i++) {
      let row =""
      for (let j = 1; j <= i; j++) {
       row+=j+" "
      }
        //spaces
        for (let k = i; k <= x-1; k++) {
          row+="  "
        }
        //spaces
        for (let k = i; k <= x-1; k++) {
          row+="  "
        }
      for (let j = i; j >= 1; j--) {
       row+=j+" "
      }
      console.log(row)
    }

  }
  alphabetsTriangle(x){
    for (let i = 0; i < x; i++) {
     let row ="";
      for (let j = 0; j <=i ; j++) {
       row+=String.fromCharCode(65 +j)+" ";
      //  charCode++
      }
      console.log(row)
    }

  }
  reverseAlphabetsTriangle(x){
    for (let i = x; i >0; i--) {
     let row ="";
      for (let j = 0; j <i ; j++) {
       row+=String.fromCharCode(65 +j)+" ";
      //  charCode++
      }
      console.log(row)
    }

  }
  sameAlphabetsTriangle(x){
  let charCode =65;
    for (let i = 0; i <x; i++) {
     let row ="";
      for (let j = 0; j <=i ; j++) {
       row+=String.fromCharCode(charCode)+" ";
      //  charCode++
      }
      charCode++
      console.log(row)
    }

  }
  // reverseAlphabetsTriangle(x){
  // let charCode =65+x;
  //   for (let i = 65; i <=charCode; i++) {
  //    let row ="";
  //     for (let j = charCode; j >=i; j--) {
  //      row+=String.fromCharCode(j)+" ";
  //     }
  //     console.log(row)
  //   }

  // }
  
  reverseTriangleForTest(x){
    for (let i = 1; i<=x; i++) {
      let row=""
     for (let j = x; j >=i ; j--) {
      console.log({j})
      row+=j+" "
     }
     console.log(row)
    }
  }
}

const obj = new Patterns();

// obj.Square(5)
// obj.Triangle(5)
// obj.NumberTriangle(5)
// obj.RepeatNumberTriangle(5);
// obj.ReverseTriangle(5);
// obj.ReverseNumberTriangle(5);
// obj.Pyramid(5);
// obj.ReversPyramid(5);
// obj.Rombos(5);
// obj.mergeTriangle(5)
// obj.oddEvenTriangle(5)
// obj.countTriangle(5)
// obj.mirrorTriangle(5)
// obj.alphabetsTriangle(5)
// obj.reverseAlphabetsTriangle(5)
// obj.reverseAlphabetsTriangle(5)
obj.reverseTriangleForTest(5)
