import { styled } from "styled-components";

const ButtonStyle = styled.button`
  background-color: #3182ce;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.2s;
  &:hover {
    background-color: #2c5282;
  }
`;

export default function Button({ text, onClick }) {
  return (
    <ButtonStyle data-testid="button-test" onClick={onClick}>
      {text}
    </ButtonStyle>
  );
}
