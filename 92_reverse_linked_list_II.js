function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
    const reverse = (head) => {
        if (!head || !head.next) return head;
        const newHead = reverse(head.next);
        head.next.next = head;
        head.next = null;
        return newHead;
    };

    // find the left node and the right node
    let l = head, preLeft = null, r = head, rightNext = head.next;
    let count = 1;
    while (count < right) {
        if (count < left) {
            preLeft = l;
            l = l.next;
        }
        r = r.next;
        rightNext = r.next;
        count++;
    }

    // when left === 1
    // which means the left node is head and preLeft points to null
    // so we need to deal with it specifically
    if (preLeft) preLeft.next = null;
    r.next = null;
    const reversedHead = reverse(l);
    if (preLeft) preLeft.next = reversedHead;
    l.next = rightNext;
    return preLeft ? head : reversedHead;
};

/**
 * time complexity O(n)
 * space complexity O(1)
 */