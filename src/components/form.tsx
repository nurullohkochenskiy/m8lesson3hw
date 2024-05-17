
import { Todo } from "../App";

interface FormProps {
  todo: string;
  setTodo: (todo: string) => void;
  todos: Todo[];
  editmode: boolean;
  setEditmode: (editmode: boolean) => void;
  editingTodo: number | null;
}

export default function Form({
  todo,
  setTodo,
  todos,
  editmode,
  setEditmode,
  editingTodo,
}: FormProps) {
  const saveTodo = editmode
    ? (editedtodo: string) => {
        setEditmode(false);
        const newTodos = todos.map((item) =>
          item.id === (editingTodo as number)
            ? { ...item, task: editedtodo }
            : item
        );
        localStorage.setItem("todos", JSON.stringify(newTodos));
      }
    : (newTodo: string) => {
        const id = todos[todos.length - 1]?.id + 1 || 0;
        const todotemp = {
          id: id,
          task: newTodo,
        };
        const newTodos = [...todos, todotemp];
        localStorage.setItem("todos", JSON.stringify(newTodos));
      };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        saveTodo(todo);
        setTodo("");
      }}
      className="flex items-center justify-center"
    >
      <input
        required
        className="bg-gray-100 rounded-l-lg py-2 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 mr-2 w-full md:w-auto"
        type="text"
        id="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        id="addbtn"
        className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-r-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      >
        Save
      </button>
    </form>
  );
}