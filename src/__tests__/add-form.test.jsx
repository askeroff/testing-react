import React from 'react';
import { fireEvent, render } from 'react-testing-library';
import AddForm from '../add-form';

describe('AddForm adds new books', () => {
  let component;
  test('Component renders', () => {
    component = render(<AddForm />);
  });

  test('User can enter a new book name', () => {
    fireEvent.change(component.getByLabelText('Add new book'), {
      target: {
        value: 'War and Peace'
      }
    });
    expect(component.getByLabelText('Add new book').value).toBe(
      'War and Peace'
    );
  });

  afterAll(() => {
    component.unmount();
  });
});
