/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
  let num = 0
  let cur = head
  while (head !== null) {
    num++
    head = head.next
  }
  let partNum = Math.floor(num / k), mod = num % k
  let ans = new Array(k).fill(null)
  for (let i = 0; i < k && cur != null; i++) {
    ans[i] = cur
    let partLen = partNum + (mod-- > 0 ? 1 : 0)
    for (let j = 1; j < partLen; j++) {
      cur = cur.next
    }
    const next = cur.next
    cur.next = null
    cur = next
  }
  return ans
};