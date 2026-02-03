import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Home header', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/home/i);
  expect(headerElement).toBeInTheDocument();
});
