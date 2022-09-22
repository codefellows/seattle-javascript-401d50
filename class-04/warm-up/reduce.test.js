'use strict';

const reduce = require('./reduce.js');

test('Reduce an array', () => {
  let array = [1, 2, 3, 4];
  let sum = reduce(array, (accumulator, val, idx) => {
    accumulator = accumulator + val;
    return accumulator;
  }, 0);

  expect(sum).toEqual(10);
});

test('Reduce an object', () => {
  let weather = {
    hot: true,
    sunny: false,
    windy: true,
    morning: false,
    smoggy: true
  };

  let facts = reduce(weather, (acc, key, value) => {
    if (weather[key] === true) {
      acc.push(key);
    }
    return acc;
  }, []);

  expect(facts[0]).toEqual('hot');
  expect(facts[1]).toEqual('windy');
  expect(facts[2]).toEqual('smoggy');
});
