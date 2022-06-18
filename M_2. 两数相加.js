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
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var addTwoNumbers = function (l1, l2) {
  let head = new ListNode(0, null);
  let node = head;
  let add = 0;
  while (l1 && l2) {
    let a = l1 === null ? 0 : l1.val;
    let b = l2 === null ? 0 : l2.val;
    let sum = a + b + add;
    add = sum > 9 ? 1 : 0;
    if (add) sum -= 10;
    l1 = l1?.next;
    l2 = l2?.next;
    node.val = sum;
    if (!l1 && !l2) {
      break;
    }
    node.next = new ListNode(0, null);
    node = node.next;
  }
  return head;
};
var addTwoNumbers = function (l1, l2) {
  let head = new ListNode(0, null);
  let node = head;
  let add = 0;
  while (l1 || l2) {
    let a = l1 === null ? 0 : l1.val;
    let b = l2 === null ? 0 : l2.val;
    let sum = a + b + add;
    add = sum > 9 ? 1 : 0;
    if (add) sum -= 10;
    l1 = l1?.next ? l1.next : null;
    l2 = l2?.next ? l2.next : null;
    node.val = sum;
    if (!l1 && !l2) {
      break;
    }
    node.next = new ListNode(0, null);
    node = node.next;
  }
  if (add) node.next = new ListNode(add, null);
  return head;
};
