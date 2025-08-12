import { render, screen } from '@testing-library/react';
import App from './App';

test('renders login screen initially', () => {
  render(<App />);
  const headingElement = screen.getByText(/Qui êtes-vous ?/i);
  expect(headingElement).toBeInTheDocument();
});
