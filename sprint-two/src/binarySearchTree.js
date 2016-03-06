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

BinarySearchTree.prototype.breadthFirstLog = function(cb) {
  var trees = Array.prototype.slice.call(arguments, 1);
  var recursionArgs = [cb];
  for (var i = 0; i < trees.length; i++) {
    cb(trees[i].value);
    if (trees[i].left) {
      recursionArgs.push(trees[i].left);
    } 
    if (trees[i].right) {
      recursionArgs.push(trees[i].right);
    }
  }
  if (recursionArgs.length > 1) {
    this.breadthFirstLog.apply(this, recursionArgs);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 * insert, contains: O(log n)
 * depthFirstLog: O(n)
 */
