'use strict';

import sortAndFilter from './../lib/sorting';

const testList = [
  {
    text: 'e',
    assignee: 'e',
    difficulty: 4,
    complete: false,
  },
  {
    text: 'b',
    assignee: 'b',
    difficulty: 1,
    complete: true,
  },
  {
    text: 'a',
    assignee: 'a',
    difficulty: 5,
    complete: false,
  },
  {
    text: 'd',
    assignee: 'd',
    difficulty: 3,
    complete: true,
  },
  {
    text: 'c',
    assignee: 'c',
    difficulty: 2,
    complete: false,
  },

];


describe('Test the filter and sorting of list items', () => {
  test('Test filter', () => {
    const filteredList = sortAndFilter(testList, true, 'added');
    expect(filteredList).toEqual(testList);

    const filteredList2 = sortAndFilter(testList, false, 'added');
    expect(filteredList2).toEqual([
      {
        text: 'e',
        assignee: 'e',
        difficulty: 4,
        complete: false,
      },
      {
        text: 'a',
        assignee: 'a',
        difficulty: 5,
        complete: false,
      },
      {
        text: 'c',
        assignee: 'c',
        difficulty: 2,
        complete: false,
      }
    ])
  });

  test('Sort by added', () => {
    const sortedList = sortAndFilter(testList, true, 'added');
    expect(sortedList).toEqual(testList);
  })

  test('Sort by difficulty', () => {
    const sortedList = sortAndFilter(testList, true, 'difficulty');
    expect(sortedList).toEqual([
      {
        text: 'a',
        assignee: 'a',
        difficulty: 5,
        complete: false,
      },
      {
        text: 'e',
        assignee: 'e',
        difficulty: 4,
        complete: false,
      },
      {
        text: 'd',
        assignee: 'd',
        difficulty: 3,
        complete: true,
      },
      {
        text: 'c',
        assignee: 'c',
        difficulty: 2,
        complete: false,
      },
      {
        text: 'b',
        assignee: 'b',
        difficulty: 1,
        complete: true,
      }
    ]);
  })

  test('Sort by task', () => {
    const sortedList = sortAndFilter(testList, true, 'task');
    expect(sortedList).toEqual([
      {
        text: 'a',
        assignee: 'a',
        difficulty: 5,
        complete: false,
      },
      {
        text: 'b',
        assignee: 'b',
        difficulty: 1,
        complete: true,
      },
      {
        text: 'c',
        assignee: 'c',
        difficulty: 2,
        complete: false,
      },
      {
        text: 'd',
        assignee: 'd',
        difficulty: 3,
        complete: true,
      },
      {
        text: 'e',
        assignee: 'e',
        difficulty: 4,
        complete: false,
      }
    ]);
  });

  test('Sort by assignee', () => {
    const sortedList = sortAndFilter(testList, true, 'assignee');
    expect(sortedList).toEqual([
      {
        text: 'a',
        assignee: 'a',
        difficulty: 5,
        complete: false,
      },
      {
        text: 'b',
        assignee: 'b',
        difficulty: 1,
        complete: true,
      },
      {
        text: 'c',
        assignee: 'c',
        difficulty: 2,
        complete: false,
      },
      {
        text: 'd',
        assignee: 'd',
        difficulty: 3,
        complete: true,
      },
      {
        text: 'e',
        assignee: 'e',
        difficulty: 4,
        complete: false,
      }
    ]);
  });

});

