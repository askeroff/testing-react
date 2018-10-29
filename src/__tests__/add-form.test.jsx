import React from 'react';
import { cleanup, fireEvent, render } from 'react-testing-library';
import AddForm from '../add-form';
import DataManager from '../data-manager';

describe('AddForm adds new books', () => {
  test('Component renders', () => {
    const component = render(<AddForm />);
  });

  test('User can enter a new book name', () => {
    const component = render(<AddForm />);
    fireEvent.change(component.getByLabelText('Add new book'), {
      target: {
        value: 'War and Peace'
      }
    });
    expect(component.getByLabelText('Add new book').value).toBe(
      'War and Peace'
    );
  });

  test('User can submit a new book', () => {
    const dataManager = new DataManager();
    const component = render(
      <AddForm updateBooks={jest.fn()} dataManager={dataManager} />
    );
    fireEvent.change(component.getByLabelText('Add new book'), {
      target: {
        value: 'War and Peace'
      }
    });
    fireEvent.click(component.getByTestId('submit'));
    const books = JSON.parse(localStorage.getItem('books'));
    expect(books.length).toBe(1);
    expect(books[0].name).toBe('War and Peace');
  });

  afterEach(cleanup);
});
