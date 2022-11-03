import { doFilter, doSort, doPaginate } from "./sorting";
import { items } from './item.fixtures';


describe('Process List of Items (Sort, etc...)', () => {
  test('should sort the items', () => {
    const sortedByAssignee = doSort(items, 'ASSIGNEE');
    const sortedByDifficulty = doSort(items, 'DIFFICULTY');
    const sortedByAlpha = doSort(items, 'ALPHA');
    expect(sortedByAssignee.map(item => item.assignee)).toEqual([ "Jack", "Jack Jack", "Jack Jack Jack", "James", "Jerry", "Jim", "Zed"])
    expect(sortedByDifficulty.map(item => item.difficulty)).toEqual([ 1, 2, 2, 2, 3, 4, 4])
    expect(sortedByAlpha.map(item => item.text)).toEqual(["Do even more work", "Do even more work", "Do more work", "Do work", "Keep doing even more work", "Keep doing work", "Zebra cleaning day"]);
  });

  test('should filter out complete items', () => {
    const showCompleted = false;
    const filtered = doFilter(items, showCompleted);
    expect(filtered.length).toBe(4);
  });

  test('should paginate', () => {
    const start = 0;
    const len = 3;
    const paginated = doPaginate(items, start, len);
    expect(paginated.length).toBe(3);
  });
});