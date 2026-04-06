/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function(list1, list2) {
    let list3 = {val: 0, next: null};
    let idk = list3;
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            idk.next = {val: list1.val, next: null};
            list1 = list1.next;
        } else {
            idk.next = {val: list2.val, next: null};
            list2 = list2.next;
        }
        idk = idk.next;
    }

    while (list1 !== null) {
        idk.next = {val: list1.val, next: null};
        list1 = list1.next;
        idk = idk.next;
    }
    while (list2 !== null) {
        idk.next = {val: list2.val, next: null};
        list2 = list2.next;
        idk = idk.next;
    }
    return list3.next;
};

function arrayToList(array) {
    let head = null;
    for (let i = array.length-1; i >= 0; i--) {
        head = {
            val: array[i],
            next: head
        };
    }
    return head;
}

function listToArray(head) {
    let result = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

console.log(listToArray(mergeTwoLists(arrayToList([1,2,4]), arrayToList([1,3,4]))));
console.log(listToArray(mergeTwoLists(arrayToList([]), arrayToList([]))));
console.log(listToArray(mergeTwoLists(arrayToList([]), arrayToList([0]))));
