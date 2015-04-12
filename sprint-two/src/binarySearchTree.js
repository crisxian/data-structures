// problem set written by Hack Reactor. challenge files cloned on 4/9/2015 for educational purposes.
// CHALLENGES AND FUNCTIONS COMPLETED BY: github.com/crisxian
var makeBinarySearchTree = function(value){
	var tree = Object.create(binarySearchMethods);
	tree.value = value || undefined;
	tree.left = null;
	tree.right = null;
	return tree;
};

binarySearchMethods = {};

binarySearchMethods.insert = function(value) {
	// found
	if(this.value === value) return;

	// continue down branch
	var branch = this.getBranch(value)
	if(this[branch] !== null) {
		this[branch].insert(value);
	} else {
		this[branch] = makeBinarySearchTree(value);
	}

};

binarySearchMethods.contains = function(value) {
	// found
	if(this.value === value) return true;
	
	// continue down branch
	var branch = this.getBranch(value)
	if(this[branch] !== null) {
		return this[branch].contains(value);
	} 

	// no more branches
	return false;
};

binarySearchMethods.depthFirstLog = function(callback) {
  // accepts a callback and executes it on every value contained in the tree.
  callback(this.value)

  if(this.left) {
  	this.left.depthFirstLog(callback);
  }
  if(this.right){
  	this.right.depthFirstLog(callback);
  }

};

binarySearchMethods.getBranch  = function(value) {
	return value < this.value ? 'left' : 'right';
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
