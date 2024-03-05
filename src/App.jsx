import React, { useState } from 'react';
import './App.css'

function App() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleAddTask = (e) => {
        e.preventDefault();
        if (newTask.trim() !== '') {
            setTasks([...tasks, { id: Date.now(), title: newTask, completed: false }]);
            setNewTask('');
        }
    };

    const handleDeleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const handleEditTask = (id, newTitle) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, title: newTitle } : task));
    };

    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={handleAddTask}>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Enter task"
                />
                <button type="submit">Add Task</button>
            </form>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <input
                            type="text"
                            value={task.title}
                            onChange={(e) => handleEditTask(task.id, e.target.value)}
                        />
                        <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
