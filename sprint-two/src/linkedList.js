var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (list.tail !== null) {
      list.tail.next = node;
    } 
    list.tail = node;
    if (list.head === null) {
      list.head = list.tail;
    }
  };

  list.removeHead = function() {
    var originalHead = list.head;
    list.head = list.head.next;
    return originalHead.value;
  };

  list.contains = function(target) {
    var currentNode = list.head;
    while (currentNode) {
      if (target === currentNode.value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail O(1)
 * removeHead O(1)
 * contains O(n)
 */
