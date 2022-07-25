/**
 * @param {string} s
 * @return {string[]}
 */

var restoreIpAddresses = function(s) {
    const l = s.length;
    const res = [];
    const dfs = (a, p) => {
        if (a.length === 4 && p === l) {
            res.push(a.join("."));
            return;
        }
        if (a.length === 4 && p < l) {                  // 字符没用完
            return;
        } 
        for (let len = 1; len <= 3; len++) {
            if (p + len - 1 >= l) return;               // 越界
            if (len !== 1 && s[p] === "0") return;      // 0 开头
            
            const str = s.slice(p, p + len);
            if (len === 3 && Number(str) > 255) return; // 数字大于 255
            a.push(str);
            dfs(a, p + len);
            a.pop();
        }
    }
    dfs([], 0);
    return res;
};