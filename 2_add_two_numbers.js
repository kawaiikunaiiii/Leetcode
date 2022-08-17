/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const dummy = new ListNode(-1); // dumb node
    let p = dummy;
    let carry = 0;
    while (l1 || l2) {
        const num1 = l1 ? l1.val : 0;
        const num2 = l2 ? l2.val : 0;
        const sum = num1 + num2 + carry;
        carry = Math.floor(sum / 10);
        const mod = sum % 10;
        p.next = new ListNode(mod);
        p = p.next;
        l1 = l1 ? l1.next : null; // important!
        l2 = l2 ? l2.next : null;
    }
    if (carry !== 0) {
        p.next = new ListNode(carry);
    }
    return dummy.next;
};

/**
 * time complexity O(n)
 * space complexity O(1)
 */