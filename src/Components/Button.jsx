import { useRef, useState } from "react";

export default function Button({ text, handleClick, ref }) {
  const buttonRef = useRef();
  const [createProject, setCreateProject] = useState();

  function handleFormInputClick() {
    console.log("Button clicked");
    setCreateProject(buttonRef.current.value);
    console.log(buttonRef.current.value);
  }
  return (
    <div className="flex">
      <div className="w-3/4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleFormInputClick}
        >
          {text}
        </button>
      </div>
    </div>
  );
}
