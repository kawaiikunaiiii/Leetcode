/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const l = s.length;
    if (l <= 1) return l;
    let i = 0, j = 1;
    const set = new Set(s[0]);
    let ans = 1;
    while (j < l) {
        if (set.has(s[j])) {
            set.delete(s[i]);
            i++;
        } else {
            ans = Math.max(ans, j - i + 1);
            set.add(s[j]);
            j++;
        }
    }
    return ans;
};

/**
 * time complexity O(n)
 * space complexity O(n)
 */