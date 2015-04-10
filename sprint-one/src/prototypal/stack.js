// problem set written by Hack Reactor. challenge files cloned on 4/9/2015 for educational purposes.
// CHALLENGES AND FUNCTIONS COMPLETED BY: github.com/crisxian
var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.storage = {};
  instance.height = 0;
  return instance;
};

var stackMethods = {};

stackMethods.push = function(value) {
	this.storage[this.height++] = value; 
};

stackMethods.pop = function() {
	if(!this.height) return; // empty?

	var value = this.storage[--this.height];
	delete this.storage[this.height]
	return value;
};

stackMethods.size = function() {
	return this.height;
};