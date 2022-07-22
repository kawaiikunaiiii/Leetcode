function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function mergeTwoLists(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;
    if (list1.val <= list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
}

function divideAndConquer(lists, start, end) {
    if (start === end) return lists[start];
    const mid = Math.floor(start + (end - start) / 2);
    const list1 = divideAndConquer(lists, start, mid);
    const list2 = divideAndConquer(lists, mid + 1, end);
    return mergeTwoLists(list1, list2);
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
    const k = lists.length;
    if (k === 0) return null;
    return divideAndConquer(lists, 0, k - 1);
};

/**
 * time complexity O(n * logk)
 * space complexity O(logk)
 */