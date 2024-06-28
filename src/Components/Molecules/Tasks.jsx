import { styled } from "styled-components";

const Buttons = styled.button`
  background-color: #3182ce;
  color: white;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.2s;
  &:hover {
    background-color: #2c5282;
  }
`;

export default function Tasks({ taskName, onClick }) {
  return (
    <>
      <Buttons onClick={onClick}>{taskName}</Buttons>
    </>
  );
}
