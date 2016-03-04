var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.items = 0;
  this.nextIndex = 0;
  this.firstIndex = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.nextIndex] = value;
  this.nextIndex++;
  this.items++;
};

Queue.prototype.dequeue = function() {
  var first = this.storage[this.firstIndex];
  delete this.storage[this.firstIndex];
  this.items && this.items--;
  this.firstIndex++;
  return first;
};

Queue.prototype.size = function() {
  return this.items;
};

