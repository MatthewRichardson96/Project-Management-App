import Dashboard from "../../Components/Molecules/Dashboard";
import { render, screen } from "@testing-library/react";
import dashboardPopulated from "../../__mocks__/data";

describe("Dashboard tests", () => {
  test("renders dashboard with selected task description", () => {
    const mockData = dashboardPopulated();
    render(
      <Dashboard tasks={mockData.tasks} selectedTask={mockData.selectedTask} />
    );
    expect(screen.getByText(mockData.tasks.description)).toBeInTheDocument();
  });

  test("renders dashboard without selected task", () => {
    const tasks = {};
    const selectedTask = false;
    render(<Dashboard tasks={tasks} selectedTask={selectedTask} />);
    const noProjectSelectedElement = screen.getByText(/No Project Selected/i);
    const selectProjectElement = screen.getByText(
      /Select a project or get started with a new one/i
    );
    expect(noProjectSelectedElement).toBeInTheDocument();
    expect(selectProjectElement).toBeInTheDocument();
  });
});
