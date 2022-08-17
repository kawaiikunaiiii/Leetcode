/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const m = nums1.length;
    const n = nums2.length;
    const l = m + n;

    const findKthElement = (k) => {
        let index1 = 0;
        let index2 = 0;
        while (true) {
            if (index1 === m) {
                return nums2[index2 + k - 1];
            }
            if (index2 === n) {
                return nums1[index1 + k - 1];
            }
            if (k === 1) {
                return Math.min(nums1[index1], nums2[index2]);
            }
            const half = Math.floor(k / 2);
            const newIndex1 = Math.min(m, index1 + half) - 1; // important!
            const newIndex2 = Math.min(n, index2 + half) - 1;
            if (nums1[newIndex1] >= nums2[newIndex2]) {
                k = k - (newIndex2 - index2 + 1); // be careful here
                index2 = newIndex2 + 1;
            } else {
                k = k - (newIndex1 - index1 + 1);
                index1 = newIndex1 + 1;
            }
        }
    }

    if (l % 2 === 0) {
        const k1 = Math.floor(l / 2);
        const k2 = Math.floor(l / 2) + 1;
        return (findKthElement(k1) + findKthElement(k2)) / 2;
    } else {
        const k = Math.floor(l / 2) + 1;
        return findKthElement(k);
    }
};

/**
 * time complexity O(log(min(m, n)))
 * space complexity O(1)
 */