import { forwardRef } from "react";
import { styled } from "styled-components";

const Label = styled.label`
  background-color: #3182ce;
  color: white;
  border-radius: 0.25rem;
  margin-top: 1rem;
`;
const TextAreas = styled.textarea`
  background-color: #edf2f7;
  border-radius: 0.25rem;
  width: 100%;
  margin-top: 1rem;
`;
const TextArea = forwardRef(function DefaultTextArea(
  { label, isEditable, onChange, ...props },
  ref
) {
  return (
    <>
      <Label className="bg-fuchsia-400">{label}</Label>
      {isEditable ? (
        <TextAreas
          data-testid="textarea-test"
          className="bg-green-500 w-full h-16"
          ref={ref}
          onChange={onChange}
          {...props}
        />
      ) : (
        <TextAreas
          data-testid="textarea-test"
          className="bg-green-500 w-full h-16"
          ref={ref}
          {...props}
        />
      )}
    </>
  );
});
export default TextArea;
