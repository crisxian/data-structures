// problem set written by Hack Reactor. challenge files cloned on 4/9/2015 for educational purposes.
// CHALLENGES AND FUNCTIONS COMPLETED BY: github.com/crisxian

// first in, first out
var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // indices
  var enter = 0; // enqueue increments
  var exit = 0; // dequeue increments

  // Implement the methods below
  someInstance.enqueue = function(value){
    storage[enter++] = value;
  };

  someInstance.dequeue = function(){
    if(exit === enter) return;

    var value = storage[exit];
    delete storage[exit++]; // delete, increment exit index, take val
    return value;
  };

  someInstance.size = function(){
    return enter - exit;
  };

  return someInstance;
};
