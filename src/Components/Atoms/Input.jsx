import { forwardRef } from "react";
import { styled } from "styled-components";

const Label = styled.label`
  background-color: #3182ce;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;

  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.2s;
`;
const Inputs = styled.input`
  background-color: #edf2f7;
  border-radius: 0.25rem;
  width: 100%;
`;

const InputResult = forwardRef(function Input(
  { label, isEditable, onChange, ...props },
  ref
) {
  return (
    <p className="control">
      <Label
        data-testid="label"
        className="bg-indigo-500 rounded text-center w-auto h-auto"
      >
        {label}
      </Label>
      {isEditable ? (
        <Inputs
          data-testid="input"
          className="bg-slate-400 rounded w-full"
          ref={ref}
          {...props}
          onChange={onChange}
        />
      ) : (
        <Inputs
          data-testid="input"
          className="bg-slate-400 rounded w-full"
          ref={ref}
          {...props}
        />
      )}
    </p>
  );
});
export default InputResult;
