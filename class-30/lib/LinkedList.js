'use strict';

const Node = require('./Node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  find(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return current.value;
      }
      current = current.next;
    }
    return null;
  }

  values() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }

  toString() {
    let values = this.values();
    return values.reduce((prev, val) => prev += `${val} -> `, '');
  }
}

module.exports = LinkedList;
