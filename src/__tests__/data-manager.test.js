import DataManager from '../data-manager';

describe('DataManager', () => {
  test('Datamanager gets books', () => {
    const dataManager = new DataManager();
    const books = dataManager.getBooks();
    expect(books.length).toBe(0);
  });

  test('Datamanager adds new books', () => {
    const dataManager = new DataManager();
    dataManager.add('The Witcher');
    const books = JSON.parse(localStorage.getItem('books'));
    expect(books).toHaveProperty('length');
    expect(books.length).toBe(1);
    expect(books[0].name).toBe('The Witcher');
    expect(books[0].read).toBe(false);
  });

  test('Datamanager changes a book', () => {
    const dataManager = new DataManager();
    dataManager.add('Book');
    expect(dataManager.getBooks()[0].read).toBe(false);
    dataManager.changeBook('read', true, 0);
    expect(dataManager.getBooks()[0].read).toBe(true);
  });

  afterEach(() => {
    localStorage.setItem('books', JSON.stringify([]));
  });
});
