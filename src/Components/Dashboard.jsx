import Header from "./Header";
import styled from "styled-components";

const Div = styled.div`
  background-color: white;
  padding: 1rem;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
`;
const H3 = styled.h3`
  color: #3182ce;
  font-size: 1.5rem;
  font-weight: 600;
`;
const Paragraph = styled.p`
  color: #4a5568;
  font-size: 1rem;
  font-weight: 400;
`;

export default function Dashboard({ tasks, selectedTask }) {
  return (
    <Div>
      <Header headerText="Dashboard" paragraph="Welcome to the dashboard" />
      {selectedTask ? (
        <ul key={tasks.name}>
          <p>{tasks.description}</p>
        </ul>
      ) : (
        <>
          <H3 className="mt-8 text-xl font-bold text-center">
            No Project Selected
          </H3>
          <Paragraph>Select a project or get started with a new one</Paragraph>
        </>
      )}
    </Div>
  );
}
