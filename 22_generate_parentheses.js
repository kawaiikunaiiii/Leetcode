/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const ans = [];
    const dfs = (cur, open, close) => {
        if (open === n && close === n) {
            ans.push(cur);
            return;
        }
        if (open < close) return; // ensure correctness
        if (open < n) {
            dfs(cur + "(", open + 1, close);
        }
        if (close < n) {
            dfs(cur + ")", open, close + 1);
        }
    }
    dfs("", 0, 0);
    return ans;
};

/**
 * time complexity ???
 * space complexity O(n)
 */