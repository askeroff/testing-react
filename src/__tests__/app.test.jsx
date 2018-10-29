import React from 'react';
import { cleanup, fireEvent, render } from 'react-testing-library';
import App from '../app';

describe('Main App', () => {
  test('When adding a book a view should be updated', () => {
    const component = render(<App />);
    fireEvent.change(component.getByLabelText('Add new book'), {
      target: {
        value: 'Book 1'
      }
    });
    fireEvent.click(component.getByTestId('submit'));
    expect(component.getByTestId('book-0').textContent).toBe('Book 1');
  });
  afterEach(cleanup);
});
