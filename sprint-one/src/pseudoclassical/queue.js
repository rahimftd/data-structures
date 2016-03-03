var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.items = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.items] = value;
  this.items++;
};

Queue.prototype.dequeue = function() {
  var first = this.storage[0];
  this.items && this.items--;
  for (var i = 0; i < Object.keys(this.storage).length; i++) {
    this.storage[i] = this.storage[i + 1];
  }
  delete this.storage[this.items];
  return first;
};

Queue.prototype.size = function() {
  return this.items;
};

