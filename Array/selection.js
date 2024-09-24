let arr =[64, 25, 1, 22, 11]


function selectionSort(arr){

    for (let i = 0; i < arr.length; i++) {
        let min = i
       for (let j = i; j < arr.length; j++) {
        if(arr[min]>arr[j]){
            min =j
        }
    }
    if(min !==i){
        [arr[i],arr[min]]=[arr[min],arr[i]]
    }
}
    return arr;
}


console.log(selectionSort(arr))