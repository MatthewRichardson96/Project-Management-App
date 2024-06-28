import Button from "../../Components/Atoms/Button";
import { render, screen } from "@testing-library/react";

test("renders button text correctly", () => {
  // Arrange
  const buttonText = "Create new project";
  render(<Button buttonText={buttonText} />);
  // Act
  const buttonElement = screen.getByTestId("button-test");
  // Assert
  expect(buttonElement).toBeInTheDocument();
});

test("renders button onClick correctly", () => {
  // Arrange
  const buttonText = "Create new project";
  const onClick = jest.fn();
  render(<Button buttonText={buttonText} onClick={onClick} />);
  // Act
  const buttonElement = screen.getByTestId("button-test");
  // Assert
  expect(buttonElement).toBeInTheDocument();
});
