function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function reverse(head) {
    if (!head || !head.next) return head;
    let pre = null, cur = head, next = head.next;
    while (cur) {
        cur.next = pre;
        pre = cur;
        cur = next;
        next = cur ? cur.next : null;
    }
    return pre;
} 

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var reverseKGroup = function(head, k) {
    if (!head || !head.next) return head;

    let p = head;
    let count = 1;
    while (p.next && count < k) {
        p = p.next;
        count++;
    }
    // numbers of nodes less than k
    if (count < k) {
        return head;
    }

    const newNext = reverseKGroup(p.next, k);
    p.next = null;
    const newHead = reverse(head);
    head.next = newNext;
    return newHead; 
};

/**
 * time complexity O(n)
 * space complexity O(1)
 */