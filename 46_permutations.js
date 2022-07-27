/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const l = nums.length;
    const visited = new Array(l).fill(false);
    const res = [];
    const dfs = (a) => {
        if (a.length === l) {
            res.push(a);
            return;
        }
        for (let i = 0; i < l; i++) {
            if (!visited[i]) {
                visited[i] = true;
                dfs([...a, nums[i]]);
                visited[i] = false;
            }
        }
    }
    dfs([]);
    return res;
};

/**
 * time complexity O(n * n!)
 * space complexity O(n * n!)
 */