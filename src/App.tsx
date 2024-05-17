import Todolist from "./components/todolist";
import Form from "./components/form";
import { useState } from "react";
export interface Todo {
  id: number;
  task: string;
}

function App() {
  const todos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");
  const [todo, setTodo] = useState("");
  const [editmode, setEditmode] = useState(false);
  const [editingTodo, setEditingTodo] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-orange-400 to-yellow-400">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Todos</h1>
      <div className="container mx-4 md:mx-0 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="form-container py-6 px-4 border-b border-gray-300">
          <Form
            todo={todo}
            setTodo={setTodo}
            todos={todos}
            editmode={editmode}
            setEditmode={setEditmode}
            editingTodo={editingTodo}
          />
        </div>

        <div className="todolist-container py-6 px-4">
          <Todolist
            todos={todos}
            setTodo={setTodo}
            setEditmode={setEditmode}
            setEditingTodo={setEditingTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
