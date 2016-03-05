var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (list.tail) {
      list.tail.next = node;
      node.previous = list.tail;
    } 
    list.tail = node;
    if (!list.head) {
      list.head = list.tail;
    }
  };

  list.addToHead = function (value) {
    var node = Node(value);
    if (!list.head) {
      list.head = node;
      list.tail = node;
    } else {
      list.head.previous = node;
      node.next = list.head;
      list.head = node;
    }
  };

  list.removeHead = function() {
    var originalHead = list.head;
    list.head = list.head.next;
    if (!list.head) {
      list.tail = null;
    } else {
      list.head.previous = null;
    }
    originalHead.next = null;
    return originalHead.value;
  };

  list.removeTail = function() {
    var originalTail = list.tail;
    if (list.head === list.tail) {
      list.tail = null;
      list.head = null;
    } else {
      list.tail = originalTail.previous;
      originalTail.previous = null;
      list.tail.next = null;
    }
    return originalTail.value;
  };

  // list.contains = function(target) {
  //   var currentNode = list.head;
  //   while (currentNode) {
  //     if (target === currentNode.value) {
  //       return true;
  //     }
  //     currentNode = currentNode.next;
  //   }
  //   return false;
  // };
  list.contains = function(target) {
    var currentNode = list.tail;
    while (currentNode) {
      if (target === currentNode.value) {
        return true;
      }
      currentNode = currentNode.previous;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail O(1)
 * removeHead O(1)
 * contains O(n)
 */
