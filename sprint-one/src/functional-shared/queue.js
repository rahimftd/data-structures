var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someObj = {};
  someObj.storage = {};
  someObj.items = 0;

  extend(someObj, queueMethods);

  return someObj;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.items] = value;
    this.items++;
  }, 
  dequeue: function() {
    var first = this.storage[0];

    // shift everything over
    for (var i = 0; i < Object.keys(this.storage).length; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    delete this.storage[this.items - 1];
    this.items = Math.max(0, --this.items);

    return first;
  }, 
  size: function() {
    return this.items;
  }
};

var extend = function(to, otherObj) {
  for (var key in otherObj) {
    to[key] = otherObj[key];
  }
};


