// TodoList.js
import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTaskTitle, setEditedTaskTitle] = useState('');
  const [filter, setFilter] = useState('all');

  const addTask = () => {
    if (newTaskTitle.trim() !== '') {
      const newTask = {
        id: Date.now(),
        title: newTaskTitle,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setNewTaskTitle('');
    }
  };

  const editTask = (id, title) => {
    setEditingTaskId(id);
    setEditedTaskTitle(title);
  };

  const saveEditedTask = () => {
    const updatedTasks = tasks.map(task =>
      task.id === editingTaskId ? { ...task, title: editedTaskTitle } : task
    );
    setTasks(updatedTasks);
    setEditingTaskId(null);
    setEditedTaskTitle('');
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') {
      return true;
    } else if (filter === 'completed') {
      return task.completed;
    } else {
      return !task.completed;
    }
  });

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        addTask();
      }}>
        <input
          type="text"
          placeholder="Enter task title"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {filteredTasks.map(task => (
          <li key={task.id} className={task.completed ? 'task-item completed' : 'task-item'}>
            <span onClick={() => toggleTaskCompletion(task.id)}>{task.title}</span>
            <div className="edit-buttons">
              <button onClick={() => editTask(task.id, task.title)}>Edit</button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="filters">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>
      <div>Total Tasks: {tasks.length}</div>
      <div>Completed Tasks: {tasks.filter(task => task.completed).length}</div>
    </div>
  );
};

export default TodoList;
