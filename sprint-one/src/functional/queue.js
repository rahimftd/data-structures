var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var items = 0;
  var firstIndex = 0;
  var lastIndex = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[lastIndex] = value;
    lastIndex++;
    items++;
  };

  someInstance.dequeue = function() {
    var first = storage[firstIndex]; 
    delete storage[firstIndex]; 
    firstIndex++;
    items = Math.max(0, --items); 
    return first; 
  };

  someInstance.size = function() {
    return items;
  };

  return someInstance;
};
