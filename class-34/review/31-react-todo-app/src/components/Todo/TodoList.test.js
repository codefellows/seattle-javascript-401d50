import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

import TodoList from './TodoList';
import SettingsProvider from '../../context/settings';
import { LoginContext } from '../../auth/context.js';

let toggleComplete = jest.fn();

// jest.mock('./auth/context');
// const MockLoginProvider = LoginProvider;
const mockLoginObj = {
  loggedIn: true,
  user: [],
  can: jest.fn(() => true),
}

const items = [
  {
    text: 'Do work',
    assignee: 'James',
    difficulty: 1,
    id: 'abc-1001',
    complete: false
  },
  {
    text: 'Do more work',
    assignee: 'Jim',
    difficulty: 2,
    id: 'abc-1002',
    complete: false
  },
  {
    text: 'Do even more work',
    assignee: 'Jack',
    difficulty: 2,
    id: 'abc-1003',
    complete: false
  },
  {
    text: 'Keep doing even more work',
    assignee: 'Jack Jack',
    difficulty: 2,
    id: 'abc-1004',
    complete: false
  },
  {
    text: 'Do even more work',
    assignee: 'Jack Jack Jack',
    difficulty: 2,
    id: 'abc-1005',
    complete: false
  },
  {
    text: 'Keep doing work',
    assignee: 'Jerry',
    difficulty: 2,
    id: 'abc-1006',
    complete: false
  }
]

describe('TodoList', () => {
  test('it should render TodoList', () => {
    render((
      <SettingsProvider>
        <LoginContext.Provider value={mockLoginObj}>
          <TodoList items={items} toggleComplete={toggleComplete} />
        </LoginContext.Provider>
      </SettingsProvider>
    ))
    // expect(screen.getByText(/James/)).toBeInTheDocument();
    expect(screen.getByText(/Jim/)).toBeInTheDocument();
  });

  test('should paginate items', async () => {
    render((
      <SettingsProvider>
        <LoginContext.Provider value={mockLoginObj}>
          <TodoList items={items} toggleComplete={toggleComplete} />
        </LoginContext.Provider>
      </SettingsProvider>
    ))
    expect(screen.getByText(/James/)).toBeInTheDocument();
    expect(screen.getByText(/Jim/)).toBeInTheDocument();
    expect(screen.queryByText(/Jerry/)).not.toBeInTheDocument();

    const rightArrowButton = screen.getByText('>');
    const leftArrowButton = screen.getByText('<');
    expect(rightArrowButton).toBeInTheDocument();
    expect(leftArrowButton).toBeInTheDocument();
    await userEvent.click(rightArrowButton);
    expect(screen.queryByText(/James/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Jim/)).not.toBeInTheDocument();
    expect(await screen.findByText(/Jerry/)).toBeInTheDocument();

    await userEvent.click(leftArrowButton);
    expect(await screen.findByText(/James/)).toBeInTheDocument();
    expect(await screen.findByText(/Jim/)).toBeInTheDocument();
    expect(screen.queryByText(/Jerry/)).not.toBeInTheDocument();
  });
});
