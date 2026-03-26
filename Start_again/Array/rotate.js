

let arr = [3, 4, 1, 5, 3, -5]
let n = 8;

class Rotate{
    constructor(arr){
        this.arr = arr;
        this.len=arr.length-1;
    }
    
    leftRotateByOne(arr){
         for (let i = 0; i < arr.length-1; i++) {
           [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
        };
        // console.log(this.arr)
        return arr;
    }
    rotateNTime(n){
        let len = arr.length;
        let rot = n%len
        while(rot>0){
            this.leftRotateByOne(this.arr)
            rot--;
        }
        console.log(this.arr)
        return this.arr;
    }
}

const obj = new Rotate(arr);
// obj.leftRotateByOne(n)
obj.rotateNTime(n)