/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findKthLargest = function(nums, k) {
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
        const num = Math.floor(Math.random() * (right - left + 1)) + left;
        swap(nums, num, right);
        return partition(nums, left, right); 
    }

    const targetIndex = nums.length - k;
    let left = 0, right = nums.length - 1;
    while (left < right) {
        const p = randomizedPartition(nums, left, right);
        if (p < targetIndex) {
            left = p + 1;
        } else if (p > targetIndex) {
            right = p - 1;
        } else {
            break;
        }
    }
    return nums[targetIndex];
};
/**
 * time complexity O(n)
 * space complexity O(logn)
 */