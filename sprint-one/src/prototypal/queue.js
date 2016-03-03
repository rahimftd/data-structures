var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someQueue = Object.create(queueMethods);
  someQueue.storage = {};
  someQueue.items = 0;
  someQueue.nextIndex = 0;
  someQueue.firstIndex = 0;

  return someQueue;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.nextIndex] = value;
    this.nextIndex++;
    this.items++;
  },
  dequeue: function() {
    var first = this.storage[this.firstIndex];
    this.items && this.items--;
    delete this.storage[this.firstIndex];
    this.firstIndex++;
    return first;
  },
  size: function() {
    return this.items;
  }
};


