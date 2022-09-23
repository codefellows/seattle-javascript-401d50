'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insert at the head/
    // create a newNode using value
    // set the newNodes's next property equal to the ll.head
    // set the head ll, equal to the new node.
      // inserting at head has 0(1) time complexity, space complexity 0(1)

  // insert at tail
    // create a newNode using value
    // traverse to the end. 0(n)
    // current should be the tail (or close to it),
    // set current.next equal to newNode
    // set ll.tail equal to newNode 0(1)
  insert(value) {}

  // Does a value exist within the linked list.
    // traverse to the end. 0(n)
    //  if we read a value that equals our input value, return true
    //  if we reach the end of our traversal, return false.
  includes(value) {}

  // read each value stored and append to a string 0(n) space, 0(n) time
    // traverse to the end.
      // for each value, append value to string.
    // return string after traversal is done.
  toString() {}
}

let linkedList = new LinkedList();
linkedList.head = new Node(1);
linkedList.head.next = new Node(2);
linkedList.head.next.next = new Node(3);
linkedList.head.next.next.next = new Node(4);

// traversal => read every value from the beginning to the end.
function traverse(ll) {  // (n) = 4
  let current = ll.head;
  while (current !== null) {
    console.log(current.value); // do something with the value
    current = current.next;
  }
}
// time complexity = 0(n)
// space complexity = 0(1)

traverse(linkedList);

module.exports = LinkedList;
