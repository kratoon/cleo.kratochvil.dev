import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders image', () => {
  render(<App />);
  const linkElement = screen.getByTitle('Cleo');
  expect(linkElement).toBeInTheDocument();
});
