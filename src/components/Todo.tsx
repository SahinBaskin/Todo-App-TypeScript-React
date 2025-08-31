import { IoIosRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import type { TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { removeTodoById, updateTodo } from "../redux/todoSlice";
import { useState } from "react";

interface todoProps {
  todoProps: TodoType;
}

function Todo({ todoProps }: todoProps) {
  const { id, content } = todoProps;
  const dispatch = useDispatch();

  const [editable, setEditable] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<string>(content);

  const handleRemoveTodo = () => {
    dispatch(removeTodoById(id));
  };

  const handleUpdateTodo = () => {
    const payload: TodoType = {
      id: id,
      content: newTodo,
    };
    dispatch(updateTodo(payload));
    setEditable(false);
  };

  return (
    <div className="todo-icons">
      {editable ? (
        <input
          type="text"
          className="todo-input-desc"
          value={newTodo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewTodo(e.target.value)
          }
        />
      ) : (
        <div>{content}</div>
      )}
      <div className="icons">
        <IoIosRemoveCircleOutline
          className="remove-icon"
          onClick={handleRemoveTodo}
        />
        {editable ? (
          <FaCheck className="check-icon" onClick={handleUpdateTodo} />
        ) : (
          <FaRegEdit className="edit-icon" onClick={() => setEditable(true)} />
        )}
      </div>
    </div>
  );
}

export default Todo;
