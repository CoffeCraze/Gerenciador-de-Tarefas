import { useState } from "react";
import Input from "./Input.jsx";
import Button from "./Button.jsx";

function AddTasks({ onTasksAddSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="bg-slate-300 p-4 rounded-md mb-6 space-y-4 shadow">
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button
        onClick={() => {
          if (!title.trim('') || !description.trim('')) {
            alert("Por favor, preencha todos os campos.");
          } else {
            onTasksAddSubmit(title, description);
            setTitle("");
            setDescription("");
          }
        }}
        type="submit"
      >
        Adicionar
      </Button>
    </div >
  );
}

export default AddTasks;
