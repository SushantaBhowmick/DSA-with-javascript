const arr =[0, 1, 0,0,0,0,0,0, 1, 1, 1, 1,1,1,1,1]
function maxConsecutiveCount(arr) {
        // Code Here
        let zeroPrev=0;
        let zeroCount=0;
        let onePrev=0;
        let oneCount=0;
        
        for(let i=0;i<arr.length;i++){
            if(arr[i]===0){
               zeroCount++;
                oneCount=0;
                if(zeroCount>zeroPrev){
                    zeroPrev=zeroCount;
                }
            }else{
                oneCount++;
                zeroCount=0;
                 if(oneCount>onePrev){
                   onePrev=oneCount;
               }
            }
        }
        console.log(zeroPrev,onePrev)
        return onePrev>zeroPrev? onePrev: zeroPrev;
    }
    
console.log(maxConsecutiveCount(arr))