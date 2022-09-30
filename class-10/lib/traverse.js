'use strict';

// traversal => read every value from the beginning to the end.
// big0:
//  0(n) time complexity
//  0(1) space complexity
function traverse(head) {  // (n) => size of the input
  let current = head;
  while (current !== null) {
    console.log(current.value); // do something with the value
    current = current.next;
  }
}
