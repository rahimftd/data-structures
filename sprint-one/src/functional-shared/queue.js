var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someObj = {};
  someObj.storage = {};
  someObj.items = 0;
  someObj.firstIndex = 0;
  someObj.nextIndex = 0;

  extend(someObj, queueMethods);

  return someObj;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.nextIndex] = value;
    this.nextIndex++;
    this.items++;
  }, 
  dequeue: function() {
    var first = this.storage[this.firstIndex];

    delete this.storage[this.firstIndex];
    this.firstIndex++;
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


