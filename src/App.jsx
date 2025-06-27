import { useEffect, useState } from "react";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";
import "./App.css";
import Title from "./components/Title";
import Test from "./components/Test.jsx"; // Importando o componente Test

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const fetchTasks = async () => {
      // Chamar a API para buscar as tarefas
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        { method: "GET" }
      );
      // Pegar os dados da API e atualizar o estado
      const data = await response.json();

      // Armazenar/Persistir os dados no State
      setTasks(data);
      // Armazenar/Persistir os dados no State
    };
    fetchTasks();
  }, []);

  function onTaskClick(taskId) {
    console.log("Task clicked:", taskId);

    const newTasks = tasks.map((task) => {
      // Preciso Atualizar essa tarefa
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      // Retornar a tarefa sem alterações
      return task;
    });

    setTasks(newTasks);
  }

  function onTaskDelete(taskId) {
    console.log("Task deleted:", taskId);

    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onTasksAddSubmit(title, description) {
    console.log("Task added:", { title, description });

    const newTask = {
      id: tasks.length + 1, // Simplesmente incrementando o ID
      title,
      description,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
  }

  return (
    console.log("App component loaded"),
    (
      <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
        <div className="w-[500px] space-y-4">
          <Test />

          <Title>Gerenciador de Tarefas</Title>
          <AddTasks onTasksAddSubmit={onTasksAddSubmit} />
          <Tasks
            tasks={tasks}
            onTaskClick={onTaskClick}
            onTaskDelete={onTaskDelete}
          />
        </div>
      </div>
    )
  );
}

export default App;
