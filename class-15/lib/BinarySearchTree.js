'use strict'

const BinaryTree = require('./BinaryTree.js')
const { Node } = require('./Node.js');

class BinarySearchTree extends BinaryTree {
  constructor() {
    super(); // this will give us a null root by instantiating our parent class.
  }

  add() {}

  contains() {}
}

module.exports = BinarySearchTree;
