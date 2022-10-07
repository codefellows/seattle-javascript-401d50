'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Knode {
  constructor(value, k) {
    this.value = value;
    this.children = new Array(k);
  }
}

module.exports = {
  Node,
  Knode
}
