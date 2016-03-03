

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.storage = {};
  this.storage.edges = {};

};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = node;
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.storage[node] === node ? true : false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.storage[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.storage.edges[fromNode].length; i++) {
    if (this.storage.edges[fromNode][i] === toNode) {
      return true;
    } 
  }
  return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.storage.edges[fromNode] === undefined) {
    this.storage.edges[fromNode] = [];
  }
  if (this.storage.edges[toNode] === undefined) {
    this.storage.edges[toNode] = [];
  }
  this.storage.edges[fromNode].push(toNode);
  this.storage.edges[toNode].push(fromNode);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var toNodeRemoveIndex = this.storage.edges[fromNode].indexOf(toNode);
  var fromNodeRemoveIndex = this.storage.edges[toNode].indexOf(fromNode);

  // splice
  this.storage.edges[fromNode].splice(toNodeRemoveIndex, 1);
  this.storage.edges[toNode].splice(fromNodeRemoveIndex, 1);

};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this.storage) {
    cb(this.storage[node]);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


