import { heightChecker } from './E_1051.高度检查器';
import { duplicateZeros } from './E_1089. 复写零';
import { isValid } from './E_20. 有效的括号';
import { findSubstring } from './H_30. 串联所有单词的子串';
import { smallestDistancePair } from './H_719. 找出第 K 小的数对距离';
import { addTwoNumbers } from './M_2. 两数相加';
import { lengthOfLongestSubstring } from './M_3. 无重复字符的最长子串';
import { findDiagonalOrder } from './M_498. 对角线遍历';
import { findLUSlength } from './M_522. 最长特殊序列 II';
import { findPairs } from './M_532. 数组中的 k-diff 数对';
import { findAndReplacePattern } from './M_890. 查找和替换模式';
import { minFlipsMonoIncr } from './M_926';
import { minCost } from './M_剑指 Offer II 091. 粉刷房子';
import { twoSum } from './美团/E_两数之和';
test('M_926', () => {
  let ans = minFlipsMonoIncr('010110');
  expect(ans).toBe(2);
});

test('M_890', () => {
  let words = ['abc', 'deq', 'mee', 'aqq', 'dkd', 'ccc'],
    pattern = 'abb';
  let ans = findAndReplacePattern(words, pattern);
  expect(ans).toStrictEqual(['mee', 'aqq']);
});

test('E_1051', () => {
  let ans = heightChecker([1, 1, 4, 2, 1, 3]);
  expect(ans).toBe(3);
});

test.skip('M_498', () => {
  let ans = findDiagonalOrder([[6, 9, 7]]);
  expect(ans).toStrictEqual([1, 2, 3, 4]);
});

test('H_719', () => {
  const ans = smallestDistancePair([9, 10, 7, 10, 6, 1, 5, 4, 9, 8], 18);
  expect(ans).toBe(2);
});

test('M_532', () => {
  const ans = findPairs([1, 3, 1, 5, 4], 0);
  expect(ans).toBe(1);
});

test('E_1089', () => {
  let ans = duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]);
  expect(ans).toBeNull();
});

test('E_1', () => {
  let ans = twoSum([2, 7, 11, 15], 9);
  expect(ans).toStrictEqual([0, 1]);
});

test('M_3', () => {
  // let ans = lengthOfLongestSubstring('abcabcbb');
  // expect(ans).toBe(3);
  // let ans1 = lengthOfLongestSubstring('bbbbb');
  // expect(ans1).toBe(1);
  // let ans2 = lengthOfLongestSubstring('pwwkew');
  // expect(ans2).toBe(3);
  // let ans3 = lengthOfLongestSubstring('');
  // expect(ans3).toBe(0);
  let ans4 = lengthOfLongestSubstring(' ');
  expect(ans4).toBe(1);
});

test('E_20', () => {
  let ans = isValid('{[]}');
  expect(ans).toBe(true);
});

test('H_30', () => {
  let ans = findSubstring('barfoothefoobarman', ['foo', 'bar']);
  console.log(ans);
  expect(ans).toStrictEqual([0, 9]);
});
describe.only('M_剑指 Offer II 091. 粉刷房子.js', () => {
  it('test1', () => {
    let ans = minCost([
      [17, 2, 17],
      [16, 16, 5],
      [14, 3, 19],
    ]);
    expect(ans).toBe(10);
  });
  it('test2', () => {
    let ans = minCost([[7, 6, 2]]);
    expect(ans).toBe(2);
  });
});

describe('M_522. 最长特殊序列 II.js', () => {
  let ans = findLUSlength(['aaa', 'aaa', 'aa']);
  expect(ans).toBe(-1);
});
