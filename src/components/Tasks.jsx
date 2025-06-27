import { ChevronRight, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onTaskClick, onTaskDelete, onSeeDetailsClick }) {
  const navgate = useNavigate();

  function onSeeDetailsClick(task) {
    const queryParams = new URLSearchParams();
    queryParams.set("title", task.title);
    queryParams.set("description", task.description);
    navgate(`/task?${queryParams.toString()}`);
  }

  return (
    <>
      <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
        {tasks.map((task) => (
          <li className="flex" key={task.id}>
            <button
              onClick={() => onTaskClick(task.id)}
              className={
                `w-full bg-slate-400 text-white p-2 rounded-md display flex justify-between items-center hover:bg-slate-500 transition-colors duration-300` +
                (task.isCompleted ? " line-through" : "")
              }
            >
              {task.title}
            </button>
            <button
              onClick={() => onSeeDetailsClick(task)}
              className={`bg-slate-400 text-white p-2  rounded-md display flex justify-center items-center ml-2 hover:bg-slate-500 transition-colors duration-300`}
            >
              <ChevronRight />
            </button>
            <button
              onClick={() => onTaskDelete(task.id)}
              className={`bg-slate-400 text-white p-2  rounded-md display flex justify-center items-center ml-2 hover:bg-slate-500 transition-colors duration-300`}
            >
              <Trash />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Tasks;
