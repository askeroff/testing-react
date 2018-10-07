import React from 'react';
import { cleanup, fireEvent, render } from 'react-testing-library';
import Checkbox from '../checkbox';

describe('Checkbox', () => {
  test('Checkbox renders without errors', () => {
    const component = render(
      <Checkbox id={0} onChange={() => {}} checked={true} />
    );
  });

  test('Checkbox onchange works', () => {
    const handleChange = jest.fn();
    const component = render(
      <div>
        <label htmlFor="checkbox">
          Checkbox
          <Checkbox id={'checkbox'} onChange={handleChange} checked={true} />
        </label>
      </div>
    );

    fireEvent.click(component.getByLabelText('Checkbox'));
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  afterEach(cleanup);
});
