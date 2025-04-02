class Solution {
    kthSmallest(arr, k) {
        // Use Quickselect to find the k-th smallest element
        return this.quickSelect(arr, 0, arr.length - 1, k - 1); // k-1 for 0-based index
    }

    quickSelect(arr, left, right, k) {
        if (left === right) {
            return arr[left]; // If the list contains only one element
        }

        const pivotIndex = this.partition(arr, left, right);

        // The pivot is in its final sorted position
        if (k === pivotIndex) {
            return arr[k];
        } else if (k < pivotIndex) {
            return this.quickSelect(arr, left, pivotIndex - 1, k); // Recur on the left subarray
        } else {
            return this.quickSelect(arr, pivotIndex + 1, right, k); // Recur on the right subarray
        }
    }

    partition(arr, left, right) {
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
}

// Example usage
const solution = new Solution();
const arr = [3, 2, 1, 5, 4];
const k = 3;
console.log(solution.kthSmallest(arr, k)); // Output: 3
