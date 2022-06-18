var PeekingIterator = function (iterator) {
  this.iterator = iterator;
  this.nextElement = this.iterator.next();
};

PeekingIterator.prototype.peek = function () {
  return this.nextElement;

};

PeekingIterator.prototype.next = function () {
  const ret = this.nextElement;
  this.nextElement = this.iterator.hasNext() ? this.iterator.next() : null;
  return ret;
};

PeekingIterator.prototype.hasNext = function () {
  return this.nextElement != null;
};
