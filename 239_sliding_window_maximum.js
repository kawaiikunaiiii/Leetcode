/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const queue = []; // store descending indexes
    const ans = [];
    for (let i = 0; i < nums.length; i++) {
        while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) {
            queue.pop();
        }
        queue.push(i);
        if (queue[0] <= i - k) {
            queue.shift();
        }
        if (i >= k - 1) ans.push(nums[queue[0]]);
    }
    return ans;
};
/**
 * time complexity O(n)
 * space complexity O(k)
 */