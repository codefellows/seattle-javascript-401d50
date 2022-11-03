import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

import TodoItem from "./TodoItem";

import { LoginContext } from '../../auth/context';
// jest.mock('./auth/context');
// const MockLoginProvider = LoginProvider;
const mockLoginObj = {
  loggedIn: true,
  user: [],
  can: jest.fn(() => true),
}

let callback;

describe('TodoItem', () => {

  beforeAll(() => {
    callback = jest.fn();
   })

  beforeEach(() => {
    callback.mockClear();
  })

  test('should render item', () => {
    const item = {
      text: 'Do work',
      assignee: 'James',
      difficulty: 1,
      id: 'abc-1001',
      complete: false
    }
    render(
      <LoginContext.Provider value={mockLoginObj}>
        <TodoItem item={item} toggleComplete={callback} />
      </LoginContext.Provider>
    );
    expect(screen.getByText('Do work')).toBeInTheDocument();
    expect(screen.getByText(/James/)).toBeInTheDocument();
  });

  test('should fire callback on toggle complete', async () => {
    const item = {
      text: 'Do work',
      assignee: 'James',
      difficulty: 1,
      id: 'abc-1001',
      complete: false
    }
    render(
      <LoginContext.Provider value={mockLoginObj}>
        <TodoItem item={item} toggleComplete={callback} />
      </LoginContext.Provider>
    );
    expect(screen.getByText('Do work')).toBeInTheDocument();
    expect(screen.getByText(/James/)).toBeInTheDocument();
    expect(screen.getByText(/Complete: false/)).toBeInTheDocument();

    const completeToggleButton = screen.getByTestId('toggle-complete-button');
    expect(completeToggleButton).toBeInTheDocument();
    await userEvent.click(completeToggleButton);
    expect(callback).toBeCalled();
    expect(callback).toBeCalledWith(item.id);
  });
});
