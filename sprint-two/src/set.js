// problem set written by Hack Reactor. challenge files cloned on 4/9/2015 for educational purposes.
// CHALLENGES AND FUNCTIONS COMPLETED BY: github.com/crisxian

// item might be string or other
var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
	this._storage[JSON.stringify(item)] = true;
};

setPrototype.contains = function(item){
	return this._storage[JSON.stringify(item)] || false;
};

setPrototype.remove = function(item){
	delete this._storage[JSON.stringify(item)];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
