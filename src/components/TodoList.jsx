import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo, getTodo } from "../redux/todos/actions"

const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos);
  const lang =  useSelector((state) => state.lang.lang);
  const dispatch = useDispatch();


  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`list-group-item d-flex justify-content-between align-items-center ${
            todo.completed ? "list-group-item-success" : ""
          }`}
        >
          <span
            style={{
              cursor: "pointer",
              textDecoration: todo.completed ? "line-through" : "none",
            }}
            onClick={() => dispatch(toggleTodo(todo.id))}
          >
            {todo.text}
          </span>
          <div className="btn-group">
            <button
              onClick={() =>dispatch(getTodo(todo))}
              className="btn btn-warning btn-sm"
            >
              {lang === 'en' ? "Edit" : "Sunting"}
            </button>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="btn btn-danger btn-sm"
            >
              {lang === 'en' ? "Delete" : "Hapus"}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
