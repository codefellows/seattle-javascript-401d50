# Class 05: DSA - Linked Lists

## Overview of DSA Lectures

## Big 0(Oh)

What / Why / How

* standardized rubric for determining whether an algorithm is efficient or not.
* How many times you perform an operations.
* Notation for communicating HOW efficient an algorithm is.
* The worst case of efficiency.

How:

* Every algorithm has inputs:
  * any value read by our program that we didn't create.
  * analysis is based on the size of given inputs (n).

```javascript

let names = ['Jacob', 'Michael'];

function (role) {
 console.log(role);
 console.log(names);
}




function analyzeMe(array) { // (n)
  // try not to use built in things.
  sort(array); // 0(n * log(n));
  for (let key in array) { // 0(n)
    console.log(key);
  }
 // 0(2n * log(n)) => 0(n * log(n))
}




function logNames() {
  const result = '';
  for (let name of names) {
    console.log(name);
    // result.push(name);
    result = name;
  }
  for (let name of names) {
    result.push(name);
    console.log(name);
  }
}

function logNamesMore() {
  for (let name of names) {
    for (let name of names) {
      console.log(name);
    }
  }
}

```

  * When analyzing, we consider 2 factors:
    * Running Time (time).
    * Space (memory).
  * Rates of growth:
    * 0(1) - constant rate of growth.
    * 0 (log(n)) - logarithmic rate of growth.
    * 0(n) - linear rate of growth.
    * 0(n^2) - quadratic
    * 0(2^n) - exponential

## Linked List Data Structures

What: Dynamic linear sequence of data values. (Array)

### Terminology

* Head: Start of a linked list.
* Tail: end of our linked list (last node)
* Node: Storage container that holds values in a linked list.
* Next: A property of a Node, points to the next value in a linked list.
* Singly / Doubly: Singly moves one way, Doubly can move both ways.
* Current: The node we are currently reading from.
