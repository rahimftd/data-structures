var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.items = 0;
  someInstance.storage = {};

  extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.items] = value;
    this.items++;
  },
  pop: function() {
    this.items = Math.max(0, --this.items);
    var last = this.storage[this.items];
    delete this.storage[this.items];
    return last;
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

