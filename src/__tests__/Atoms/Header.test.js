import Header from "../../Components/Atoms/Header";
import { render, screen } from "@testing-library/react";

test("renders header text correctly", () => {
  // Arrange
  const headerText = "Welcome to the Project Management App";
  render(<Header headerText={headerText} />);

  // Act
  const headerElement = screen.getByTestId("header");

  // Assert
  expect(headerElement).toBeInTheDocument();
  expect(headerElement).toHaveTextContent(headerText);
});

test("renders paragraph correctly when provided", () => {
  // Arrange
  const headerText = "Welcome to the Project Management App";
  const paragraph = "Manage your projects efficiently";
  render(<Header headerText={headerText} paragraph={paragraph} />);

  // Act
  const paragraphElement = screen.getByText(paragraph);

  // Assert
  expect(paragraphElement).toBeInTheDocument();
});
