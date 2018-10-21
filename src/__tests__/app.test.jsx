import React from 'react';
import { render, waitForElement } from 'react-testing-library';
import App from '../app';

test('Testing our App Component', async () => {
  const component = render(<App />);
  localStorage.setItem(
    'books',
    JSON.stringify([{ name: 'book1', read: false }])
  );
  // await wait(() => {
  //   expect(
  //     component.getByText('Books to read').classList.contains('title')
  //   ).toBe(true);
  // });
  await waitForElement(() => component.getByText('Books to read'));
});
