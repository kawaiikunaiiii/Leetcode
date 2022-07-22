/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
    const l = height.length;
    let left = 1, right = l - 2;
    let lMaxHeight = height[0], rMaxHeight = height[l - 1];
    let res = 0;
    while (left <= right) {
        if (lMaxHeight >= rMaxHeight) {
            if (height[right] <= rMaxHeight) {
                res += rMaxHeight - height[right];
            } else {
                rMaxHeight = height[right];
            }
            right--;
        } else {
            if (height[left] <= lMaxHeight) {
                res += lMaxHeight - height[left];
            } else {
                lMaxHeight = height[left];
            }
            left++;
        }
    }
    return res;
};

/**
 * time complexity O(n)
 * space complexity O(1)
 */