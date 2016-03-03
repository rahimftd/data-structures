var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.items = 0;

};

Stack.prototype.push = function(value) {
  this.storage[this.items] = value;
  this.items++;
};

Stack.prototype.pop = function() {
  var last = this.storage[this.items - 1];
  delete this.storage[this.items - 1];
  this.items && this.items--;
  return last;
};

Stack.prototype.size = function() {
  return this.items;
};

