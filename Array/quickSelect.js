function quickSelectSort(arr) {
    // Helper function for partitioning the array
    function partition(left, right) {
        const pivot = arr[right]; // Choosing the last element as the pivot
        let i = left;

        for (let j = left; j < right; j++) {
            if (arr[j] < pivot) {
                [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap if the current element is smaller than the pivot
                i++;
            }
        }

        [arr[i], arr[right]] = [arr[right], arr[i]]; // Move the pivot to its final position
        return i; // Return the final index of the pivot
    }

    // Helper function for the Quickselect sorting
    function quickSort(left, right) {
        if (left < right) {
            const pivotIndex = partition(left, right);
            quickSort(left, pivotIndex - 1); // Recur on the left subarray
            quickSort(pivotIndex + 1, right); // Recur on the right subarray
        }
    }

    // Call quickSort on the entire array
    quickSort(0, arr.length - 1);
    return arr; // Return the sorted array
}

// Example usage
const array = [3, 2, 1, 5, 4];
const sortedArray = quickSelectSort(array);
console.log(sortedArray); // Output: [1, 2, 3, 4, 5]

