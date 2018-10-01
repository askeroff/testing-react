import React from 'react';
import { render } from 'react-testing-library';
import BooksList from '../books-list';
import DataManager from '../data-manager';

test('BooksList renders a list of books', () => {
  const dataManager = new DataManager();
  dataManager.add('Book 1');
  dataManager.add('Book 2');
  const component = render(<BooksList books={dataManager.getBooks()} />);
  expect(component.getByTestId('book-0').textContent).toBe('Book 1');
  expect(component.getByTestId('book-1').textContent).toBe('Book 2');
});
