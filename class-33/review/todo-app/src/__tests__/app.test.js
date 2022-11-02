'use strict';

import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from './../app';

describe('Testing item list functions', () => {

  test('Should be able to add item to list', () => {

    render( <App />);

    const addButton = screen.getByTestId('add-button');
    fireEvent.click(addButton);

    const list = screen.getByTestId('item-list');
    expect(list).toBeVisible();
  });

  test('Should be able to change the status of the item', () => {

    render( <App />);

    const addButton = screen.getByTestId('add-button');
    fireEvent.click(addButton);

    const changeStatusButton = screen.getByText('Complete: false');
    fireEvent.click(changeStatusButton);
    
    const newStatus = screen.getByText('Complete: true');
  });

  test('Should be able to delete an item', () => {
    render( <App />);

    const addButton = screen.getByTestId('add-button');
    fireEvent.click(addButton);

    const list = screen.getByTestId('item-list');
    expect(list).toBeVisible();

    const deleteButton = screen.getByText('Delete Item');
    fireEvent.click(deleteButton);

    expect(deleteButton).not.toBeVisible();
    
  });
});

