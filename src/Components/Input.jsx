import { forwardRef } from "react";

const InputResult = forwardRef(function Input({ label, ...props }, ref) {
  return (
    <p className="control">
      <label className="bg-fuchsia-400">{label}</label>
      <input className="bg-green-500" ref={ref} {...props} />
    </p>
  );
});
export default InputResult;
