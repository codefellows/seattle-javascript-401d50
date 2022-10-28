'use strict';

const HashTable = require('./lib/HashTable.js');
const LinkedList = require('./lib/LinkedList.js');

const food = new HashTable(1024);

const key = 'recipe';
const value = 'banana split';
const hash = food.hash(key);

// add both key and value to our linked list (AKA bucket);
let list = new LinkedList();
list.add(`${key}:${value}`);

// add the bucket value to the hashed index position
food.table[hash] = list;

console.log(JSON.stringify(food));
