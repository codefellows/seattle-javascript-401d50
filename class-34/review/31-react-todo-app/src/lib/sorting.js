
const comparisonFns = {
  'ASSIGNEE': (item1, item2) => item1.assignee.toLowerCase() < item2.assignee.toLowerCase() ? -1: 1,
  'DIFFICULTY': (item1, item2) => item1.difficulty - item2.difficulty,
  'ALPHA': (item1, item2) => item1.text.toLowerCase() < item2.text.toLowerCase() ? -1: 1,

}

export const doPaginate = (items, idxStart, paginationLength) => {
    const idxEnd = idxStart + paginationLength;
    return items.slice(idxStart, idxEnd);
  }

export const doFilter = (items, showCompleted) => { 
    if (showCompleted) {
      return items
    } else { 
      return items.filter((i)=>!i.complete)
    }
  }

export const doSort = (items, sortBy) => {
    if (sortBy === 'ASSIGNEE') {
      const arr = [...items];
      arr.sort(comparisonFns['ASSIGNEE']);
      return arr;
    } else if (sortBy === 'ALPHA') {
      const arr = [...items];
      arr.sort(comparisonFns['ALPHA']);
      return arr;
    } else if (sortBy === 'DIFFICULTY') {
      const arr = [...items];
      arr.sort(comparisonFns['DIFFICULTY']);
      return arr;
    } else { 
      return items;
    }
  }