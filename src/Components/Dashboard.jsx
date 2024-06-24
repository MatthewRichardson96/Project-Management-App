import Header from "./Header";
import Tasks from "./Tasks";

export default function Dashboard({ tasks }) {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <Header headerText="Dashboard" paragraph="Welcome to the dashboard" />
      <h3 className="mt-8 text-xl font-bold text-center">
        No Project Selected
      </h3>
      <p>Select a project or get started with a new one</p>
      <p>task name is {tasks}</p>
      {tasks &&
        tasks.map((task) => (
          <ul key={task.name}>
            <Tasks taskName={task.name} taskDescription={task.description} />
          </ul>
        ))}
    </div>
  );
}
