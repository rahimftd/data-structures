var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someQueue = Object.create(queueMethods);
  someQueue.storage = {};
  someQueue.items = 0;

  return someQueue;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.items] = value;
    this.items++;
  },
  dequeue: function() {
    var first = this.storage[0];
    this.items && this.items--;
    for (var i = 0; i < Object.keys(this.storage).length; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    delete this.storage[this.items];
    return first;
  },
  size: function() {
    return this.items;
  }
};


