import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { deleteTodo, toggleTodo, getTodo } from "../redux/todos/actions"
import { fetchTodos, deleteTodo, getTodo, toggleTodo } from "../redux/async/todos/actions";

const TodoList = () => {
  // const todos = useSelector((state) => state.todo.todos);
  const { todos, loading, error, isSuccess } = useSelector((state) => state.todo);
  const lang =  useSelector((state) => state.lang.lang);
  const dispatch = useDispatch();

  //get data when component is mounted
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  //get data when isSuccess is true
  useEffect(() => {
    if (isSuccess) {
      dispatch(fetchTodos());
    }
  }, [isSuccess]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  if (todos.length === 0) {
    return <div>No todos found.</div>;
  }

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
            // onClick={() => dispatch(toggleTodo(todo.id))}
            onClick={() => dispatch(toggleTodo(todo))}
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
              // onClick={() => dispatch(deleteTodo(todo.id))}
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
