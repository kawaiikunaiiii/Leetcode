/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    if (n <= 1) return 1;
    let a = 1;
    let b = 1;
    let ans;
    for (let i = 2; i <= n; i++) {
        ans = a + b;
        a = b;
        b = ans;
    }
    return ans;
};

/**
 * time complexity O(n)
 * space complexity O(1)
 */