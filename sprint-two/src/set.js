var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[JSON.stringify(item)] = item;
};

setPrototype.contains = function(item) {
  if (typeof item === 'object' || typeof item === 'function') {
    return JSON.stringify(this._storage[JSON.stringify(item)]) === JSON.stringify(item); 
  } else {
    return this._storage[JSON.stringify(item)] === item;
  }
};

setPrototype.remove = function(item) {
  delete this._storage[JSON.stringify(item)];
};

/*
 * Complexity: What is the time complexity of the above functions?
 * all functions: O(1)
 */
