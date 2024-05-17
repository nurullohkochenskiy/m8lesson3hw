
import { Todo } from "../App";

interface TodolistProps {
  todos: Todo[];
  setTodo: (todo: string) => void;
  setEditmode: (editmode: boolean) => void;
  setEditingTodo: (editingTodo: number | null) => void;
}

export default function Todolist({
  todos,
  setTodo,
  setEditmode,
  setEditingTodo,
}: TodolistProps) {
  const editToggle = (id: number, name: string) => {
    setEditmode(true);
    setTodo(name);
    setEditingTodo(id);
  };

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((item) => item.id !== id);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    window.location.reload();
  };

  return (
    <ul className="grid grid-cols-1 gap-4">
      {todos.map((item) => (
        <li
          key={item.id}
          className="bg-white rounded-lg shadow-lg p-4 flex items-center justify-between"
        >
          <h2 className="text-gray-800 font-medium">{item.task}</h2>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => editToggle(item.id, item.task)}
              className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTodo(item.id)}
              className="bg-red-500 hover:bg-red-600 text-white rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}