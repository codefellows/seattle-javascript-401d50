'use strict';

const LinkedList = require('../LinkedList');

describe('Testing the Linked List class', () => {

  test('Should instantiate an empty linked list', () => {
    let list = new LinkedList();

    expect(list).toHaveProperty('head', null)
  });

  test('Should be able to add nodes', () => {
    let list = new LinkedList();
    list.add(10);

    expect(list.head).toBeTruthy();
    expect(list.head).toHaveProperty('value', 10);


    list.add(20);
    expect(list.head.next).toHaveProperty('value', 20);
  });

  test('Should be able to retrieve a list of values', () => {
    let list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);

    let values = list.values();

    expect(values.length).toEqual(4);
    expect(values[0]).toEqual(1);
    expect(values[1]).toEqual(2);
    expect(values[2]).toEqual(3);
    expect(values[3]).toEqual(4);
  });

  test('Should be able to convert values to a string', () => {
    let list = new LinkedList();
    list.add(2);
    list.add(4);
    list.add(6);
    list.add(8);

    let string = list.toString();

    expect(string).toEqual('2 -> 4 -> 6 -> 8 -> ');
  });
});
