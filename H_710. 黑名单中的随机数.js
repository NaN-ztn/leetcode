/**
 * @param {number} n
 * @param {number[]} blacklist
 */
var Solution = function (n, blacklist) {
  let m = blacklist.length;
  this.b2w = new Map();
  this.bound = n - m;
  let set = new Set();
  for (const black of blacklist) {
    if (black >= this.bound) {
      set.add(black);
    }
  }
  let w = this.bound;
  for (const black of blacklist) {
    if (black < this.bound) {
      while (set.has(w)) {
        ++w;
      }
      this.b2w.set(black, w);
      w++;
    }
  }
};

/**
 * @return {number}
 */
Solution.prototype.pick = function () {
  let random = Math.floor(Math.random() * this.bound);
  return this.b2w.get(random) || random;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(n, blacklist)
 * var param_1 = obj.pick()
 */
