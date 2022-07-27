/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let j = i + 1, k = nums.length - 1;
        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            if (sum > 0) {
                k--;
            } else if (sum < 0) {
                j++;
            } else {
                res.push([nums[i], nums[j], nums[k]]);
                // 否则 [-2, 0, 0, 2, 2] 会返回两个 -2/0/2
                while (j < k && nums[k] === nums[k - 1]) {
                    k--;
                }
                while (j < k && nums[j] === nums[j + 1]) {
                    j++;
                }
                j++, k--;
            }
        }
    }
    return res;
};

/**
 * time complexity O(n * n)
 * space complexity O(n)
 */