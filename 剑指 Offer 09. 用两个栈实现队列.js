CQueue.prototype.appendTail = function (value) {
  this.queue.push(value);
  return null;
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  return this.queue.length === 0 ? -1 : this.queue.shift();
};
