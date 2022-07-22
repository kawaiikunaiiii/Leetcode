/**
 * @param {number[]} nums
 * @return {number}
 */
 var firstMissingPositive = function(nums) {
    const l = nums.length;

    const swap = (nums, i, j) => {
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    for (let i = 0; i < l; i++) {
        while (nums[i] > 0 && nums[i] <= l && nums[nums[i] - 1] !== nums[i]) {
            swap(nums, nums[i] - 1, i);
        }
    }

    for (let i = 0; i < l; i++) {
        if (nums[i] !== i + 1) return i + 1;
    }

    return l + 1;
};
/**
 * time complexity O(n)
 * space complexity O(1)
 */