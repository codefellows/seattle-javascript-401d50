import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';
import { items } from './lib/item.fixtures';

import { LoginContext } from './auth/context';
// jest.mock('./auth/context');
// const MockLoginProvider = LoginProvider;
const mockLoginObj = {
  loggedIn: true,
  user: { capabilities: ["create", "read", "update", "delete"] },
  can: jest.fn(() => true),
}

const addItem = async (screen, item) => {
    const detailsInput = screen.getByTestId('item-details-input');
    const assignInput = screen.getByTestId('assigned-to-input');
    const submitButton = screen.getByTestId('submit-button');
    // const slider = screen.getByTestId('difficulty-slider');

    await userEvent.type(detailsInput, item.text);
    await userEvent.type(assignInput, item.assignee);
    await userEvent.click(submitButton);
 }

describe('App', () => {
  test('renders to do list', () => {
    render(
      <LoginContext.Provider value={ mockLoginObj }>
        <App />
      </LoginContext.Provider>
    );
    const titleElement = screen.getByText(/To Do List/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('should Add Todo controls', () => {
    render(
      <LoginContext.Provider value={ mockLoginObj }>
        <App />
      </LoginContext.Provider>
    );
    expect(screen.getByTestId('item-details-input')).toBeInTheDocument();
    expect(screen.getByTestId('assigned-to-input')).toBeInTheDocument();
    expect(screen.getByRole('slider')).toBeInTheDocument();
  });

  test('should create a todo', async () => {
    render(
      <LoginContext.Provider value={ mockLoginObj }>
        <App />
      </LoginContext.Provider>
    );
    const detailsInput = screen.getByTestId('item-details-input');
    const assignInput = screen.getByTestId('assigned-to-input');
    const submitButton = screen.getByTestId('submit-button');
    // const slider = screen.getByTestId('difficulty-slider');

    await userEvent.type(detailsInput, 'Do work');
    await userEvent.type(assignInput, 'Sally');
    await userEvent.click(submitButton);

    const todoContainer = screen.getByTestId('todos-container');
    expect(todoContainer).toHaveTextContent(/Do work/);
    expect(todoContainer).toHaveTextContent(/Assigned to: Sally/);
  });

  test('should update settings', async () => {
    render(
      <LoginContext.Provider value={ mockLoginObj }>
        <App />
      </LoginContext.Provider>
    );
    for (let item of items) {
      await addItem(screen, item);
    }
    expect(await screen.findByText(/Do work/)).toBeInTheDocument();
    expect(await screen.findByText(/Zed/)).toBeInTheDocument();
    const settingsButton = screen.getByTestId('settings-button');
    await userEvent.click(settingsButton);
    await waitFor(() => expect(() => screen.queryByTestId('assignee-sort-button').toBeInTheDocument()));
    const assigneeButton = screen.getByTestId('assignee-sort-button')
    await userEvent.click(assigneeButton);
    await userEvent.keyboard('{Escape}')
    expect(screen.queryByText(/Zed/)).not.toBeInTheDocument();

  })

});
