const arr = [15,2,3,1,7,9,10,12]

function peakElement(arr){

    let ans=[];
    for (let i = 0; i < arr.length; i++) {

        if((!arr[i-1] && arr[i]>=arr[i+1]) || (!arr[i+1] && arr[i]>=arr[i-1]) || (arr[i]>=arr[i+1] && arr[i]>=arr[i-1])){
            return i;
        }
    }
    return -1;
}


function peakElement2(arr) {
    let low = 0;
    let high = arr.length - 1;

    while (low < high) {
        let mid = Math.floor((low + high) / 2);

        // Check if the mid element is less than the next element
        if (arr[mid] < arr[mid + 1]) {
            // Move to the right half if the right neighbor is greater
            low = mid + 1;
        } else {
            // Otherwise, move to the left half
            high = mid;
        }
    }

    // When low meets high, we have found a peak
    return low;
}

// Example usage
const index = peakElement2(arr);
console.log(index);