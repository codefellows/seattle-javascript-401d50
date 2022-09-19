'use strict';

const add = require('../add.js');

// console.log(add(2, 3) === 5);

describe('Testing our add function', () => {
    test('Should be able to add 2 and 3', () => {
        expect(add(2, 3)).toEqual(5);
    });
});
