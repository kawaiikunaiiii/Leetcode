function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var zigzagLevelOrder = function(root) {
     // [1, 2, 3, 4, null, null, 5]
    if (!root) return [];

    let stack1 = [root];
    let stack2 = [];
    const ans = [];
    let isOddLevel = true;
    while (stack1.length) {
        const a = [];
        while (stack1.length) {
            const cur = stack1.pop();
            a.push(cur.val);
            if (isOddLevel) {
                if (cur.left) stack2.push(cur.left);
                if (cur.right) stack2.push(cur.right);
            } else {
                if (cur.right) stack2.push(cur.right);
                if (cur.left) stack2.push(cur.left);
            }
        }
        ans.push(a);
        isOddLevel = !isOddLevel;
        stack1 = stack2;
        stack2 = [];
    }
    return ans;
};

/**
 * time complexity O(n)
 * space complexity O(n)
 */