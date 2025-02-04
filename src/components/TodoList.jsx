import React, { useState } from 'react';
import './TodoList.css';  // Import the CSS from the same folder


const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (todo) {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">Todo List</h1>
      <div className="todo-input-container">
        <input
          type="text"
          className="todo-input"
          placeholder="Add a new task"
          value={todo}
          onChange={handleInputChange}
        />
        <button className="todo-button" onClick={handleAddTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((todoItem, index) => (
          <li key={index} className="todo-item">
            <span>{todoItem}</span>
            <button className="delete-button" onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
