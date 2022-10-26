import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from '../app';

describe('Testing our App', () => {
  test('Should be able to send a request', () => {
    render(<App />);

    let input = screen.getByTestId('form-input');
    fireEvent.change(input, { target: { value: 'https://pokeapi.co/api/v2/pokemon'}});

    let methodBtn = screen.getByTestId('get');
    fireEvent.click(methodBtn);

    let submitBtn = screen.getByTestId('submit-btn');
    fireEvent.click(submitBtn);

    waitFor(() => {
      expect(screen.getByText(/results/)).toBeInTheDocument();
    });
  });
})
