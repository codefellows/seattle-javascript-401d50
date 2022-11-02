'use strict';

import SettingsProvider from '../context/settings';
import SettingsForm from '../components/SettingsForm';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Test the item list component', () => {
  test('Test show complete', () => {
    render(
      <SettingsProvider>
        <SettingsForm />
      </SettingsProvider>
    )

    const storeSettings = jest.spyOn(window.localStorage.__proto__, 'setItem').mockImplementation();

    const showCompleted = screen.getByTestId('show-completed');
    fireEvent.click(showCompleted);
    expect(storeSettings).toHaveBeenCalled();

    // const increment = screen.getByRole('increment');
    // console.log(increment);

    // const select = getByRole('')
  })


});

