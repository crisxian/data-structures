// problem set written by Hack Reactor. challenge files cloned on 4/9/2015 for educational purposes.
// CHALLENGES AND FUNCTIONS COMPLETED BY: github.com/crisxian

// hold k, v pair at hash index
var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

// i = [[k,v]]
HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(!this._storage.get(i)) {
  	  this._storage.set(i,[])
  }
	this._storage.get(i).push([k,v]);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var index = this._storage.get(i);

  if(index && index.length){
		for(var pair in index){
			if (index[pair][0] === k) {
				return index[pair][1];
			}
		}
  }

  return null;
};

HashTable.prototype.remove = function(k){
	var i = getIndexBelowMaxForKey(k, this._limit);
	this._storage.get(i).forEach(function(item) {
		if (item[0] === k) {
			delete item[0]
		}
	});

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
