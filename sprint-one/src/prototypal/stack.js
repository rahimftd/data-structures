var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.items = 0;

  return newStack;
};

var stackMethods = {
  pop: function() {
    this.items = Math.max(0, --this.items);
    var last = this.storage[this.items];
    delete this.storage[this.items];
    return last;
  },
  push: function(value) {
    this.storage[this.items] = value;
    this.items++;
  },
  size: function() {
    return this.items;
  }
};



