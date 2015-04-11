// problem set written by Hack Reactor. challenge files cloned on 4/9/2015 for educational purposes.
// CHALLENGES AND FUNCTIONS COMPLETED BY: github.com/crisxian
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if (list.head === null) {
      list.tail = list.head = makeNode(value);
    }
    else {
      list.tail = list.tail.next = makeNode(value);
    };
  };

  list.removeHead = function(){
    var value = list.head.value;
    var tmp = list.head;

    list.head = list.head.next
    delete tmp; // delete so all reference will be null

    return value;
  };

  list.contains = function(target){
    var selector = list.head;
    while (selector !== null) {
      if (selector.value === target) {
        return true;
      };
      selector = selector.next;
    };
    
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
