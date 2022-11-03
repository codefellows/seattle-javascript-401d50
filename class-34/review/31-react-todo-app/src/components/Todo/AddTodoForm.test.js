import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

import AddTodoForm from "./AddTodoForm";

import { LoginContext } from '../../auth/context';
// jest.mock('./auth/context');
// const MockLoginProvider = LoginProvider;
const mockLoginObj = {
  loggedIn: true,
  user: [],
  can: jest.fn(() => true),
}

let callback;

describe('AddTodoForm', () => {
  beforeAll(() => {
    callback = jest.fn();
   })
  beforeEach(() => {
    callback.mockClear();
  })
  test('should call callback with inputs', async () => {
    callback = jest.fn();
    const defaultValues = {
    };
    render(
      <LoginContext.Provider value = {mockLoginObj}>
        <AddTodoForm addItem={callback} defaultValues={defaultValues} />
      </LoginContext.Provider>
    )

    const detailsInput = screen.getByTestId('item-details-input');
    const assignInput = screen.getByTestId('assigned-to-input');
    const submitButton = screen.getByTestId('submit-button');

    await userEvent.type(detailsInput, 'Do work');
    await userEvent.type(assignInput, 'James');
    await userEvent.click(submitButton);

    expect(callback).toBeCalled();
    expect(callback).toBeCalledWith(expect.objectContaining({assignee: 'James'}));
    expect(callback).toBeCalledWith(expect.objectContaining({text: 'Do work'}));

  });

});
