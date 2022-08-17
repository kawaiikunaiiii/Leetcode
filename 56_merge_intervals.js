/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        } else {
            return a[0] - b[0];
        }
    });

    let cur = intervals[0];
    const res = [];
    for (const i of intervals) {
        if (cur[1] >= i[0]) {
            const left = Math.min(cur[0], i[0]);
            const right = Math.max(cur[1], i[1]);
            cur = [left, right];
        } else {
            res.push(cur);
            cur = i;
        }
    }
    res.push(cur);
    return res;
};

// time complexity O(nlogn) 
// space complexity O(n)