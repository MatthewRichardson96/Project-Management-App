import React from "react";
import { render } from "@testing-library/react";
import Input from "../../Components/Atoms/Input";

test("label is rendered correctly", () => {
  // Arrange
  const label = "Project Name";
  const { getByText } = render(<Input label={label} />);
  // Act
  const labelElement = getByText(label);
  // Assert
  expect(labelElement).toBeInTheDocument();
});

test("input is rendered correctly", () => {
  // Arrange
  const input = "Project Name";
  render(<Input input={input} />);
  // Act
  const inputElement = document.querySelector("input");
  // Assert
  expect(inputElement).toBeInTheDocument();
});
