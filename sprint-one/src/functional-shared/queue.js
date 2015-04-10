// problem set written by Hack Reactor. challenge files cloned on 4/9/2015 for educational purposes.
// CHALLENGES AND FUNCTIONS COMPLETED BY: github.com/crisxian
var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.storage = {};
  instance.enter = 0;
  instance.exit = 0;

  instance.enqueue = queueMethods.enqueue;

  instance.dequeue = queueMethods.dequeue;

  instance.size = queueMethods.size;

  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
	this.storage[this.enter++] = value;
};

queueMethods.dequeue = function() {
	if(this.enter === this.exit) return; // empty?

	var val = this.storage[this.exit]
	delete this.storage[this.exit++];
	return val;
};

queueMethods.size = function() {
	return this.enter - this.exit;
};