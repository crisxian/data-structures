// problem set written by Hack Reactor. challenge files cloned on 4/9/2015 for educational purposes.
// CHALLENGES AND FUNCTIONS COMPLETED BY: github.com/crisxian
var Graph = function(){
	this._storage = {};
};

Graph.prototype.addNode = function(newNode, toNode){
	var keys = Object.keys(this._storage);
	this._storage[newNode] = []

	if(toNode === undefined){
		// push edges
		if (keys.length === 1) {
			this.addEdge(newNode, keys[0]);
		}
	}
	else {
		this.addEdge(newNode, toNode);
	}
};

Graph.prototype.contains = function(node){
	 return this._storage.hasOwnProperty(node);
};

Graph.prototype.removeNode = function(node){
	var edges = this._storage[node];
	if(edges.length){
		edges.forEach(function(otherNode) {
			this.removeEdge(otherNode, node);
		});
	}
	delete this._storage[node];
};

Graph.prototype.getEdge = function(fromNode, toNode){
	var edges = this._storage[fromNode];
	// found?
	if(edges.indexOf(toNode) !== -1) {
		return true;
	}
	else return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
	this._storage[fromNode].push(toNode);
	this._storage[toNode].push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
	// edges list
	var from = this._storage[fromNode];
	var to = this._storage[toNode];
	var index;

	// edges remove
	if( (index = from.indexOf(toNode)) !== -1 ) {
		from.splice(index, 1);
	}
	if( (index = to.indexOf(fromNode)) !== -1 ) {
		to.splice(index, 1);
	}

	// empty?
	if(from.length === 0) { 
		this.removeNode(fromNode);
	}
	if(to.length === 0) {
		this.removeNode(toNode);
	}

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
