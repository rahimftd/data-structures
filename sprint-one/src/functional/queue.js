var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var items = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[items] = value;
    items++;
  };

  someInstance.dequeue = function() {
    var first = storage[0];
    for (var i = 0; i < Object.keys(storage).length - 1; i++) {
      storage[i] = storage[i + 1];    
    }
    delete storage[items - 1];
    items = Math.max(0, --items);
    return first;
  };

  someInstance.size = function() {
    return items;
  };

  return someInstance;
};
