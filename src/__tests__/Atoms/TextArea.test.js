import TextArea from "../../Components/Atoms/TextArea";
import { screen, render } from "@testing-library/react";

test("renders textarea correctly", () => {
  // Arrange
  render(<TextArea />);
  // Act
  const textareaElement = document.querySelector("textarea");
  // Assert
  expect(textareaElement).toBeInTheDocument();
});

test("renders textarea label correctly", () => {
  // Arrange
  const label = "Project Description";
  render(<TextArea label={label} />);
  // Act
  const labelElement = screen.getByText(label);
  // Assert
  expect(labelElement).toBeInTheDocument();
});
