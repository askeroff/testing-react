import DataManager from '../data-manager';

function sum(x, y) {
  return x + y;
}

jest.mock('../data-manager', () => {
  return class {
    getBooks() {
      return [{ name: 'Book 1', read: false }];
    }
  };
});

describe('Mock tests', () => {
  test('2 + 3 return five', () => {
    const sum = jest.fn((x, y) => x + y);
    expect(sum(2, 3)).toBe(5);
    expect(sum).toHaveBeenCalled();
    expect(sum).toHaveBeenCalledTimes(1);
    expect(sum).toHaveBeenCalledWith(2, 3);
  });

  test('Datamanager', () => {
    const manager = new DataManager();
  });
});
