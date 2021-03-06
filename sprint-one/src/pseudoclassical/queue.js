// problem set written by Hack Reactor. challenge files cloned on 4/9/2015 for educational purposes.
// CHALLENGES AND FUNCTIONS COMPLETED BY: github.com/crisxian
var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.enter = this.exit = 0;
};

Queue.prototype.enqueue = function(value) {
	this.storage[this.enter++] = value; // enter val then increment to next empty
};

Queue.prototype.dequeue = function() {
	if(this.enter === this.exit) return; // empty?

	var value = this.storage[this.exit];
	delete this.storage[this.exit++]; // remove data then increment next value
	return value;
};

Queue.prototype.size = function() {
	return this.enter - this.exit;
};


