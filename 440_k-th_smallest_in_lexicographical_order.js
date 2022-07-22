/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(n, k) {
    // calculate how many nodes are there under certain prefix
    const getCount = (prefix, n) => {
        let count = 0;
        for (let cur = prefix, next = prefix + 1; cur <= n; cur *= 10, next *= 10) {
            count += Math.min(next, n + 1) - cur;
        }
        return count;
    }

    let p = 1;          // No.p smallest node in the tree
    let prefix = 1;     // value of the node p points to
    while (p < k) {
        let count = getCount(prefix, n);
        if (p + count > k) {
            prefix *= 10;
            p++;
        } else {
            prefix++;
            p += count;
        }
    }
    console.log(prefix);
    return prefix;
};

findKthNumber(13, 2);

/**
 * time complexity ???
 * space complexity O(1)
 */