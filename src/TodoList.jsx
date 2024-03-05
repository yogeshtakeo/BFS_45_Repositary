// TodoList.jsx

import React, { useState } from 'react';
import './TodoList.css'; // Create this file for styling

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: tasks.length + 1, title: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const editTask = (id) => {
    const updatedTask = prompt('Edit task:', tasks.find(task => task.id === id)?.title);
    if (updatedTask !== null) {
      const updatedTasks = tasks.map(task => (task.id === id ? { ...task, title: updatedTask } : task));
      setTasks(updatedTasks);
    }
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task));
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <form onSubmit={addTask} className="task-input">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            {task.title}
            <span onClick={() => toggleTask(task.id)}>✔️</span>
            <span onClick={() => editTask(task.id)}>✏️</span>
            <span onClick={() => deleteTask(task.id)}>❌</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
