import { forwardRef } from "react";

const TextArea = forwardRef(function DefaultTextArea({ label, ...props }, ref) {
  return (
    <p className="control">
      <label className="bg-fuchsia-400">{label}</label>
      <textarea className="bg-green-500" ref={ref} {...props} />
    </p>
  );
});
export default TextArea;
