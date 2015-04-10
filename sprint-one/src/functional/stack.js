// problem set written by Hack Reactor. challenge files cloned on 4/9/2015 for educational purposes.
// CHALLENGES AND FUNCTIONS COMPLETED BY: github.com/crisxian

// last in, first out
var makeStack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var height = 0; // inc with push, decr with pop

  // Implement the methods below
  someInstance.push = function(value){
    storage[height++] = value;
  };

  someInstance.pop = function(){
    if(!height) return;

    var value = storage[--height]
    delete storage[height];
    return value;
  };

  someInstance.size = function(){
    return height;
  };

  return someInstance;
};