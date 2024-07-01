import { DashboardContext } from "../../Contexts/DashboardContext";
import { useContext } from "react";

export default function InputForm() {
  return isClicked ? (
    <>
      <InputResult ref={projectName} type="text" label="Your Name" />
      <TextArea ref={projectDescription} label="Your Description" />
      <div className="flex items-center justify-between">
        <Button onClick={handleFormInputClick} text="Add Project" />
      </div>
    </>
  ) : isEditable ? (
    <>
      <InputResult
        ref={projectName}
        type="text"
        label="Your Name"
        isEditable={isEditable}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <TextArea
        ref={projectDescription}
        label="Your Description"
        isEditable={isEditable}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <div className="flex items-center justify-between">
        <Button onClick={handleEditUpdateClick} text="Update Project" />
      </div>
    </>
  ) : undefined;
}
