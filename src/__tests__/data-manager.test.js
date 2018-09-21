import DataManager from '../data-manager';

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
});
