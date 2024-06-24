import { forwardRef } from "react";
import { styled } from "styled-components";

const Label = styled.label`
  background-color: #3182ce;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
`;
const TextAreas = styled.textarea`
  background-color: #edf2f7;
  border-radius: 0.25rem;
  width: 100%;
`;
const TextArea = forwardRef(function DefaultTextArea({ label, ...props }, ref) {
  return (
    <>
      <Label className="bg-fuchsia-400">{label}</Label>
      <TextAreas className="bg-green-500 w-full h-16" ref={ref} {...props} />
    </>
  );
});
export default TextArea;
