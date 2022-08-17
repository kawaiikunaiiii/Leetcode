/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const l = s.length;
    if (l <= 1) return s;
    let res = "";
    const findLongestPalindrome = (i, j) => {
        while(i >= 0 && j < l) {
            if (s[i] === s[j]) {
                res = res.length < j - i + 1 ? s.slice(i, j + 1) : res;
                i--, j++;
            } else {
                break;
            }
        }
    }
    for (let i = 0; i < l; i++) {
        findLongestPalindrome(i, i);
        findLongestPalindrome(i, i + 1);
    }
    return res;
};

/**
 * time complexity O(n * n)
 * space complexity O(1)
 */