function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var rightSideView1 = function(root) {
    // BFS：每一层最后一个元素即为右视图
    if (!root) return [];
    const ans = [];
    const queue = [root];
    while (queue.length) {
        const l = queue.length;
        for (let i = 0; i < l; i++) {
            const cur = queue.shift();
            if (i === l - 1) {
                ans.push(cur.val);
            }
            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);
        }
    }
    return ans;
};

var rightSideView2 = function(root) {
    // DFS
    if (!root) return [];
    const ans = [];
    const dfs = (node, depth) => {
        if (!node) return;
        if (ans.length === depth) {
            ans.push(node.val);
        }
        depth++;
        dfs(node.right, depth);
        dfs(node.left, depth);
    }
    dfs(root, 0);
    return ans;
};

/**
 * time complexity O(n)
 * space complexity O(n)
 */