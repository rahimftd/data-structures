var BinarySearchTree = function(value) {
  var tree = Object.create(BinarySearchTree.prototype);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  return tree;
};

BinarySearchTree.prototype.insert = function(value) {
  var newTree = BinarySearchTree(value);
  if (newTree.value < this.value) {
    if (!this.left) {
      this.left = newTree;
    } else {
      this.left.insert(value);
    }
  } else if (newTree.value > this.value) {
    if (!this.right) {
      this.right = newTree;
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  if (this.value === value) {
    return true;
  } else if (this.left && value < this.value) {
    return this.left.contains(value);
  } else if (this.right && value > this.value) {
    return this.right.contains(value);
  } else {
    return false;
  }

};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 * insert, contains: O(log n)
 * depthFirstLog: O(n)
 */
