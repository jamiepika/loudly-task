import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Loudly Trax app, () => {
  render(<App />);
  const linkElement = screen.getByText('Loudly Trax');
  expect(linkElement).toBeInTheDocument();
});
