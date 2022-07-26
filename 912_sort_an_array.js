/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    // quick sort
    const swap = (nums, i, j) => {
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    const partition = (nums, left, right) => {
        const pivot = nums[right];
        let i = left - 1;
        for (let j = left; j < right; j++) {
            if (nums[j] <= pivot) {
                i++;
                swap(nums, i, j);
            }
        }
        swap(nums, i + 1, right);
        return i + 1;
    }

    const randomizedPartition = (nums, left, right) => {
        const random = Math.floor(Math.random() * (right - left + 1)) + left;
        swap(nums, random, right);
        return partition(nums, left, right);
    }

    const randomizedQuickSort = (nums, left, right) => {
        if (left < right) {
            const p = randomizedPartition(nums, left, right);
            randomizedQuickSort(nums, left, p - 1);
            randomizedQuickSort(nums, p + 1, right);
        }
    }

    randomizedQuickSort(nums, 0, nums.length - 1);
    return nums;
};

/**
 * time complexity O(nlogn)
 * space complexity O(logn)
 */