/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function (head, insertVal) {
  if (!head) {
    let ans = new Node(insertVal, null);
    ans.next = ans;
    return ans;
  }
  let node = head;
  if (insertVal < head.val) {
    while (node.next !== head && node.next.val >= node.val) {
      node = node.next;
    }
    if (node.next.val >= insertVal) {
      let N = new Node(insertVal, null);
      N.next = node.next;
      node.next = N;
      return head;
    }
    node = node.next;
  }

  while (node.next !== head && node.next.val < insertVal && node.next.val >= node.val) {
    node = node.next;
  }
  let N = new Node(insertVal, null);
  N.next = node.next;
  node.next = N;
  return head;
};

// var insert = function(head, insertVal) {
//     const node = new Node(insertVal);
//     if (!head) {
//         node.next = node;
//         return node;
//     }
//     if (head.next === head) {
//         head.next = node;
//         node.next = head;
//         return head;
//     }
//     let curr = head, next = head.next;
//     while (next !== head) {
//         if (insertVal >= curr.val && insertVal <= next.val) {
//             break;
//         }
//         if (curr.val > next.val) {
//             if (insertVal > curr.val || insertVal < next.val) {
//                 break;
//             }
//         }
//         curr = curr.next;
//         next = next.next;
//     }
//     curr.next = node;
//     node.next = next;
//     return head;
// };

// 作者：LeetCode-Solution
// 链接：https://leetcode.cn/problems/4ueAj6/solution/pai-xu-de-xun-huan-lian-biao-by-leetcode-f566/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
