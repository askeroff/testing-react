import React from 'react';
import { render } from 'react-testing-library';
import AddForm from '../add-form';

describe('AddForm adds new books', () => {
  let component;
  test('Component renders', () => {
    component = render(<AddForm />);
  });
  afterAll(() => {
    component.unmount();
  });
});
