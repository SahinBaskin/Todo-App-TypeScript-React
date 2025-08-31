import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../redux/todoSlice";
import type { TodoType } from "../types/Types";

function TodoCreate() {
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState<string>("");

  const handleCreateTodo = () => {
    if (newTodo.trim().length == 0) {
      alert("Add Todo!");
      return;
    }
    const payload: TodoType = {
      id: Math.floor(Math.random() * 999999),
      content: newTodo,
    };
    dispatch(createTodo(payload));
    setNewTodo("");
  };

  return (
    <div className="todo-create">
      <input
        value={newTodo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewTodo(e.target.value)
        }
        type="text"
        className="todo-input"
        placeholder="Add Todo..."
      />
      <button className="todo-button" onClick={handleCreateTodo}>
        Add Todo
      </button>
    </div>
  );
}

export default TodoCreate;
