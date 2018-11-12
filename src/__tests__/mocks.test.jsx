import DataManager from '../data-manager';

function sum(x, y) {
  return x + y;
}

jest.mock('../data-manager');

describe('Mock tests', () => {
  beforeEach(() => {
    DataManager.mockClear();
  });

  test('2 + 3 return five', () => {
    const sum = jest.fn((x, y) => x + y);
    expect(sum(2, 3)).toBe(5);
    expect(sum).toHaveBeenCalled();
    expect(sum).toHaveBeenCalledTimes(1);
    expect(sum).toHaveBeenCalledWith(2, 3);
  });

  test('Datamanager', () => {
    const manager = new DataManager();
    manager.getBooks();
    expect(DataManager).toHaveBeenCalledTimes(1);
  });

  test('Datamanager 2', () => {
    const manager = new DataManager();
    expect(DataManager).toHaveBeenCalledTimes(1);
  });
});
