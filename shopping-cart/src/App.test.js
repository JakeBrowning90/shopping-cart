import { render, screen } from '@testing-library/react';
import App from './App';

test('renders shop link', () => {
  render(<App />);
  const linkElement = screen.getByText(/shop/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders item card', () => {
  render(<App />);
  const itemElement = screen.getByText(/rose-red/i);
  expect(itemElement).toBeInTheDocument();
});
