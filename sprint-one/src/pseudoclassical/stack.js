// problem set written by Hack Reactor. challenge files cloned on 4/9/2015 for educational purposes.
// CHALLENGES AND FUNCTIONS COMPLETED BY: github.com/crisxian
var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.height = 0;
};

Stack.prototype.push = function(value) {
	this.storage[this.height++] = value;
};

Stack.prototype.pop = function() {
	this.height && this.height--; // short-circuit

	var value = this.storage[this.height];
	delete this.storage[this.height];
	return value;
};

Stack.prototype.size = function() {
	return this.height;
};