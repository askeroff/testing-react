import React from 'react';
import { cleanup, fireEvent, render } from 'react-testing-library';
import BooksList from '../books-list';
import DataManager from '../data-manager';

describe('BookList', () => {
  test('BooksList renders a list of books', () => {
    const dataManager = new DataManager();
    dataManager.add('Book 1');
    dataManager.add('Book 2');
    const component = render(<BooksList books={dataManager.getBooks()} />);
    expect(component.getByTestId('checkbox-0').textContent).toBe('Book 1');
    expect(component.getByTestId('checkbox-1').textContent).toBe('Book 2');
  });

  test('Clicking on a book marks it as read', () => {
    const dataManager = new DataManager();
    dataManager.add('Book 1');
    const component = render(<BooksList books={dataManager.getBooks()} />);
    fireEvent.click(component.getByLabelText('Book 1'));
    expect(component.getByLabelText('Book 1').checked).toBe(true);
    expect(dataManager.getBooks()[0].read).toBe(true);

    fireEvent.click(component.getByLabelText('Book 1'));
    expect(component.getByLabelText('Book 1').checked).toBe(false);
    expect(dataManager.getBooks()[0].read).toBe(false);
  });

  afterEach(() => {
    cleanup();
    localStorage.setItem('books', JSON.stringify([]));
  });
});
