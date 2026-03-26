let arr = [8, 8, 7, 6, 5,12];


class LargestNumber{
    lgNumber(arr){
        let lg =-Infinity;
        for (let i = 0; i < arr.length; i++) {
           if(lg<arr[i]){
            lg=arr[i]
           }
        }
        console.log(lg)
    }
    secondLargestNumber(arr){
        let first =-Infinity;
        let second =-Infinity;
        for (let i = 0; i < arr.length; i++) {
           if(first<arr[i]){
            second = first;
            first=arr[i];
           }else if (first>arr[i] && second<arr[i]){
            second=arr[i]
           }
        }
        console.log(second)
    }
    thirdLargestNumber(arr){
        
        let first =-Infinity;
        let second =-Infinity;
        let third =-Infinity;
        for (let i = 0; i < arr.length; i++) {
           if(first<=arr[i]){
            third=second;
            second = first;
            first=arr[i];
           }else if (first>=arr[i] && second<=arr[i]){
            third=second;
            second=arr[i];
           }else if(second>=arr[i] && third<=arr[i]){
            third=arr[i]
           }
        }
        console.log(first)
        console.log(second)
        console.log(third)
    }
}

const obj = new LargestNumber();
// obj.lgNumber(arr)
// obj.secondLargestNumber(arr)
obj.thirdLargestNumber(arr)