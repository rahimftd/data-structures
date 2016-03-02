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
    var first = storage[0]; // Saves first value of object
    for (var i = 0; i < Object.keys(storage).length - 1; i++) {
      storage[i] = storage[i + 1]; // Shifts all values to a lower index
    }
    delete storage[items - 1]; // Deletes the redundant item
    items = Math.max(0, --items); // Updates items count
    return first; // Returns the first/removed item
  };

  someInstance.size = function() {
    return items;
  };

  return someInstance;
};
