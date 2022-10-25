import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App.js";

describe("Testing the app component", () => {
  test("Should be able to increment our counter", () => {
    render(<App />);

    let incrementButton = screen.getByText("+");
    fireEvent.click(incrementButton);

    let displayClicks = screen.getByTestId("click-display");
    expect(displayClicks).toHaveTextContent(/1/);
  });

  test("Should update username", () => {
    render(<App />);

    let input = screen.getByTestId("username-form-input");
    // this sets the values of our input using the same values that the dom would use: e.target.value!
    fireEvent.change(input, { target: { value: "test" } });

    let submitBtn = screen.getByTestId("username-form-submit");
    fireEvent.click(submitBtn);

    let display = screen.getByTestId("username-value");
    expect(display).toHaveTextContent(/test/);
  });
});
