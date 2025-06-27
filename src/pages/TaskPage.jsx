import { useSearchParams } from "react-router-dom";
import Title from "../components/Title";

// This component displays the details of a task based on the query parameters in the URL.

function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  console.log("Title:", title);
  console.log("Description:", description);

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
            <Title>Detalhes da Tarefa</Title>
        <div className="bg-white p-6 rounded-md shadow-md">
          <p className="text-gray-700 mb-2">
            <strong>Titulo:</strong> {title}
          </p>
          <p className="text-gray-700">
            <strong>Descrição:</strong> {description}
          </p>
          <button
            onClick={() => window.history.back()}
            className="bg-slate-400 text-white p-2 rounded-md mt-4 w-full hover:bg-slate-500 transition-colors duration-300  flex justify-center items-center"
            >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
