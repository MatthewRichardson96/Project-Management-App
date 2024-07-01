import App from "../App";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("clicking create new project opens up the input form", () => {
  // Arrange
  const onClick = jest.fn();
  render(<App />);
  const buttonElement = screen.getByText("Create new project");

  // Act
  // can use either of the following two lines
  // fireEvent.click(buttonElement);
  userEvent.click(buttonElement);

  // Assert
  const inputElement = screen.getByTestId("input");
  const textareaElement = screen.getByTestId("textarea-test");
  expect(inputElement).toBeInTheDocument();
  expect(textareaElement).toBeInTheDocument();
});
