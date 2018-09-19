import DataManager from '../data-manager';

test('Datamanager gets books', () => {
  const dataManager = new DataManager();
  const books = dataManager.getBooks();
  expect(books.length).toBe(0);
});
