var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  extend(newTree, treeMethods);
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var result = false;
  if (this.value === target) {
    result = true;
  } else if (this.children.length !== 0) {
    for (var i = 0; i < this.children.length; i++) {
      result = result || this.children[i].contains(target);
    }
  }
  return result;
};

var extend = function(destination, obj) {
  for (var key in obj) {
    destination[key] = obj[key];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 addChild: O(1)
 contains: O(n)
 */
