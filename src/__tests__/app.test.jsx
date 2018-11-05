import React from 'react';
import { cleanup, fireEvent, render } from 'react-testing-library';
import App from '../app';
import DataManager from '../data-manager';

describe('Main App', () => {
  test('When adding a book a view should be updated', () => {
    const component = render(<App />);
    fireEvent.change(component.getByLabelText('Add new book'), {
      target: {
        value: 'Book 1'
      }
    });
    fireEvent.click(component.getByTestId('submit'));
    expect(component.getByTestId('checkbox-0').textContent).toBe('Book 1');
  });

  test('When deleting a book localstorage and view should be updated', () => {
    const dataManager = new DataManager();
    dataManager.add('Book 1');
    dataManager.add('Book 2');
    const component = render(<App />);
    expect(dataManager.getBooks().length).toBe(2);
    fireEvent.click(component.getByTestId('button-0'));
    expect(dataManager.getBooks().length).toBe(1);
    expect(component.queryByLabelText('Book 1')).toBeNull();
    expect(component.getAllByTestId('book')).toHaveLength(1);
  });

  afterEach(() => {
    cleanup();
    localStorage.setItem('books', JSON.stringify([]));
  });
});
