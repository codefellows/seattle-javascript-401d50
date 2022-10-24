import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Article from "../Article.jsx";

describe("Testing the Article Component", () => {
  test("Should render a title", () => {
    render(<Article title="test title" />);

    let heading = screen.getByTestId("heading");

    expect(screen.getByText("test title")).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
  });
});
