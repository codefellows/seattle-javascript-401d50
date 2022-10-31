import ListItems from '../components/ListItems';
import ListProvider from '../context/ListContext';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Testing the list Item component', () => {
  test('Should display Items', () => {

    render(
      <ListProvider>
        <ListItems />
      </ListProvider>
    );

    let list = screen.getByTestId('items');

    expect(list).toBeInTheDocument();
    expect(list).toHaveTextContent(/The Bee Movie/);
  });
})
