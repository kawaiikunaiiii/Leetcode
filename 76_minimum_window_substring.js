/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

var minWindow = function(s, t) {
    const m = s.length;
    const n = t.length;
    if (n > m) return "";
    const map = {};
    let missingType = 0;
    for (const c of t) {
        if (!map[c]) {
            map[c] = 1;
            missingType++;
        } else {
            map[c]++;
        }
    }

    let i = 0, j = 0;
    let min = m + 1;
    let start = m;
    while (j < m) {
        // 滑动窗口右侧指针移动，直到找到包含全部字符的位置 
        if (map[s[j]] !== undefined) map[s[j]]--;
        if (map[s[j]] === 0) missingType--;
        // 滑动窗口左侧指针移动，直到找到最小的窗口
        while (missingType === 0) {
            if (j - i + 1 < min) {
                min = j - i + 1;
                start = i;
            }
            if (map[s[i]] !== undefined) map[s[i]]++;
            if (map[s[i]] > 0) missingType++;
            i++;
        }
        j++;
    }
    if (start === m) return "";
    return s.substring(start, start + min);
};

/**
 * time complexity O(m + n)
 * space complexity O(C)
 */