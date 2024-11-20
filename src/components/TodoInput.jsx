// src/components/TodoInput.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addTodo, updateTodo } from "../redux/todos/actions";
import { addTodo, updateTodo } from "../redux/async/todos/actions";
import { v4 as uuidv4 } from "uuid";

const TodoInput = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo.data);
  const lang = useSelector((state) => state.lang.lang);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ id: uuidv4(), text, completed: false }))
    setText("");
  };

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(updateTodo({...todo, text}))
    setText("")
  }

  // THIS CODE FROM PREVIOUS CODE
  // set text to todo.text when available, and to '' when unavailable. This make form always be controlled form.
  useEffect(() => {
    if (todo.text) {
      setText(todo.text);
    } else {
      setText("");
    }
  }, [todo]);

  return (
    <div className="mb-3">
      {/* Check is object todo is more than 0, to make sure user is want to edit or add new list */}
      <form onSubmit={todo && Object.keys(todo).length > 0 ? handleEdit : handleSubmit} className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder={lang === 'en' ? "Add a new task..." : "Tambah tugas baru..."}
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary">
          {todo && Object.keys(todo).length > 0  ? lang === 'en' ? "Update" : "Perbarui" : lang === 'en' ? "Add" : "Tambah" }
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
