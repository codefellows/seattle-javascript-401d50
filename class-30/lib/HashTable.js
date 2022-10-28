'use strict';

const LinkedList = require('./LinkedList');

class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  /**
   * Return a hash value for the provided key.
   * @param {String} key
   */
  hash(key) {

  }

  /**
   * places a value into our Hash Table by hashing our key, and setting our value into that Bucket of the table.
   * @param {String} key
   * @param {Any} value
   */
  set(key, value) {

  }

  /**
   * returns the value stored in the bucket associated with the key parameter.
   * @param {String} key
   * @return {any}
   */
  get(key) {

  }
  
  /**
   * Returns a Boolean, indication if the kye exists in the table.
   * @param (String) key
   * @return {Boolean}
   */
  has(key) {

  }

  /**
   * Returns a collection of Keys
   * @return {Array}
   */
  keys() {

  }
}

module.exports = HashTable;
