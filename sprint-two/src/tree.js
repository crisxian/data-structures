// problem set written by Hack Reactor. challenge files cloned on 4/9/2015 for educational purposes.
// CHALLENGES AND FUNCTIONS COMPLETED BY: github.com/crisxian
var makeTree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = [];

  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
	this.children.push(makeTree(value));
};

treeMethods.contains = function(target){
	if(this.value === target) return true;

	if(this.children) {
		for (var node in this.children) {
			if(this.children[node].contains(target)) {
				return true;
			}
		};
	};

	return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
