

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) !== undefined) {
    var hashArray = [];
    hashArray = hashArray.concat(this._storage.get(index), v);
    this._storage.set(index, hashArray);  
  } else {
    this._storage.set(index, v);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var ind;
  if (Array.isArray(this._storage.get(index))) {
    if (this._storage.get(index).indexOf(k) !== -1) {
      return k;
    }
  } else {
    return this._storage.get(index);
  }
};

HashTable.prototype.remove = function(k) {
  var removeIndex = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(value, index, storage) {
    if (index === removeIndex) {
      delete storage[index];
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


