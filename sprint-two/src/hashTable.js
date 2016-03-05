
// Creates a constructor for HashTable (pseudoclassical)
var HashTable = function() {
  // Limit denotes the maximum size of the table
  this._limit = 8;
  this._size = 0;
  // Instantiate a 'Limited Array' that will store hash table data
  this._storage = LimitedArray(this._limit);
};
// Insert method that HashTable instances will delegate to
HashTable.prototype.insert = function(k, v, needsRehash) {
  // Creating an index based on a hash function
  var index = getIndexBelowMaxForKey(k, this._limit);
  // Initializing a pair object that stores the key and 
  // value that is provided
  var pair = [k, v];
  needsRehash = needsRehash || false;
  // Checks whether the hash table has a value at the index.
  // If there is already a value, that means there is a 'collision'
  if (this._storage.get(index) !== undefined) {
    // Creates a hashArray that is going to store pairs
    var hashArray = [];
    // Add the existing value(s) to the hashArray
    hashArray = hashArray.concat(this._storage.get(index));
    
    // Iterate through the hashArray
    for (var i = 0; i < hashArray.length; i++) {
      // Check if key (provided by user) is equal to any key
      // already in hashArray
      if (k === hashArray[i][0]) {
        // Replace the existing value at the existing[0] with
        // the new (user provided) value
        hashArray[i][1] = v;
        
        break;
      // Checks if we have reached the end of the hashArray
      } else if (i === hashArray.length - 1) { 
        // Add the new pair to the hashArray
        // This will only happen if a matching[0] 
        // has not already been found in the hashArray
        
        hashArray.push(pair);
        
      }
    }
    this._storage.set(index, hashArray);    
  } else { // If there is no collision it will simply store the pair
    this._storage.set(index, [pair]);
    
  }
  if (!needsRehash) {
    this._size++;
    this.reHash(this.checkIfNeedsResizing());
  }
};
// Function that HashTable instances delegate to. Returns a value based on a provided[0]
HashTable.prototype.retrieve = function(k) {
  // Calculates an index based on a hash function and the provided key
  var index = getIndexBelowMaxForKey(k, this._limit);
  // Variables that temporarily stores the pair(s) at index
  var entries = this._storage.get(index);
  
  // Checks if entries is an array
  if (entries) {
    // Iterate through the entries array
    for (var i = 0; i < entries.length; i++) {
      // Check if the key at index i is equal to the user provided key
      
      if (entries[i] && k === entries[i][0]) {
        // Returns the value at index i
        return entries[i][1];
      }
    }
  }
};
// Function that HashTable instances delegate to. Removes a value at an index calculated from the given key
HashTable.prototype.remove = function(k) {
  // Calculates an index based on a hash function and the provided key
  var removeIndex = getIndexBelowMaxForKey(k, this._limit);
  var entries = this._storage.get(removeIndex);
  // Checks if the value is an array (which means that there are multiple entries at the index)
  if (entries) {
    // Iterates through the array of entries
    for (var i = 0; i < entries.length; i++) {
      // If an entry's key is equal to k (the user provided key)
      if (entries[i][0] === k) {
        // Deletes the entry
        delete entries[i];
      }
    }
  }
  this._size--;
  this.reHash(this.checkIfNeedsResizing());
};

HashTable.prototype.checkIfNeedsResizing = function() {
  if (this._size > (0.75 * this._limit)) {
    return 1;
  } else if (this._size < (0.25 * this._limit)) {
    return -1;
  } else {
    return 0;
  }
};

HashTable.prototype.reHash = function(doubleOrHalf) {
  if (doubleOrHalf > 0) {
    this._limit *= 2;
  } else if (doubleOrHalf < 0) {
    this._limit /= 2;
  }
  if (doubleOrHalf) {
    var oldStorage = this._storage;
    var that = this;
    // this._size = 0;
    this._storage = LimitedArray(this._limit);
    oldStorage.each(function(bucket) {
      if (bucket) {
        for (var i = 0; i < bucket.length; i++) {
          if (bucket[i]) {
            that.insert(bucket[i][0], bucket[i][1], true);
          }
        } 
      }
    });
    delete oldStorage;
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 * all functions are O(1) assuming that the hash function is effective
 */


