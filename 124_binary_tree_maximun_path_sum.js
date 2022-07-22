function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxPathSum = function(root) {
    let max = root.val;

    const helper = (node) => {
        if (!node) return 0;
        const left = helper(node.left);
        const right = helper(node.right);
        max = Math.max(max, node.val + left + right);
        const returnValue = Math.max(node.val + left, node.val + right);
        // 如果某个子节点的返回值为负数，那么他的父节点如果连上它，值肯定会更小
        // 所以直接返回 0，代表着父节点不连接这个子节点
        return returnValue > 0 ? returnValue : 0;
    }

    helper(root);
    return max;
};

/**
 * time complexity O(n)
 * space complexity O(n)
 */