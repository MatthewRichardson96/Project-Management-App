import { styled } from "styled-components";

const H2 = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;
const Paragraph = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export default function Header({ headerText, paragraph }) {
  return (
    <>
      <H2 data-testid="header" className="text-2xl font-bold text-center">
        {headerText}
      </H2>
      {paragraph && (
        <Paragraph className="mt-4 text-center">{paragraph}</Paragraph>
      )}
    </>
  );
}
