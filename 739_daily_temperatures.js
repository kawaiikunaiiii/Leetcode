/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

var dailyTemperatures = function(temperatures) {
    const stack = [];
    const l = temperatures.length;
    const res = new Array(l).fill(0);
    for (let i = 0; i < l; i++) {
        while (stack.length) {
            const cur = stack[stack.length - 1];
            if (temperatures[i] > temperatures[cur]) {
                res[cur] = i - cur;
                stack.pop();
            } else {
                break;
            }
        }
        stack.push(i);
    }
    return res;
};

/**
 * time complexity O(n) 
 * space complexity O(n)
 */