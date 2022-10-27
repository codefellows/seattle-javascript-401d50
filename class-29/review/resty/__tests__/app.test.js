import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/app';

/* TODO

  X Assert that upon submitting the form will result in data being rendered in the output area
    X You will need to “mock” the API request with React Testing Library
  
    Note the example here: https://testing-library.com/docs/react-testing-library/example-intro/
      This shows how to use the msw package to setup a fake server that returns fake data in your tests so that you can run tests without having to call an actual API

*/

describe('testing the app component', () =>
{
  test('upon submitting the form, result in data being rendered in the output area', () =>
  {
    render(<App />);

    // scrape test page for GO! button
    let goButton = screen.getByText('GO!');
    // click the button
    fireEvent.click(goButton);

    // get the value of the thing with the 'clickDisplay' class
    let testResults = screen.getByTestId('test-results');

    expect(testResults).toHaveTextContent('results:');
  });
})
