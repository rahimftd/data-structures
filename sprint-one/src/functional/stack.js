var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var items = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[items] = value;
    items++;
  };

  someInstance.pop = function() {
    var last = storage[items - 1];
    delete storage[items - 1];
    items = Math.max(0, --items);  
    return last;
  };

  someInstance.size = function() {
    return items;
  };

  return someInstance;
};
