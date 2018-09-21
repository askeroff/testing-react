import React from 'react';
import { cleanup, fireEvent, render } from 'react-testing-library';
import AddForm from '../add-form';

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

  afterEach(cleanup);
});
