import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  const addTask = () => {
    if (!task) return;
    setTasks([...tasks, { id: Date.now(), text: task }]);
    setTask('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const startEditing = (id) => {
    setEditingId(id);
    const taskToEdit = tasks.find((task) => task.id === id);
    setEditText(taskToEdit.text);
  };

  const editTask = () => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === editingId) {
        return { ...task, text: editText };
      }
      return task;
    });
    setTasks(updatedTasks);
    setEditingId(null);
    setEditText('');
  };

  return (
    <div className="container mx-auto p-4">
      <input
        className="input border border-gray-400 p-2 mr-2"
        type="text"
        placeholder="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        className="btn rounded-md bg-blue-500 text-white p-2"
        onClick={addTask}
      >
        Add Task
      </button>
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex rounded-sm p-5 bg-gray-100 border-gray-300 items-center justify-between mt-3"
        >
          {editingId === task.id ? (
            <>
              <input
                className="input border border-gray-400 p-2"
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button
                className="btn rounded-md bg-green-500 text-white p-2"
                onClick={editTask}
              >
                Update
              </button>
            </>
          ) : (
            <>
              <span>{task.text}</span>
              <div>
                <button
                  className="btn rounded-md bg-yellow-500 text-white p-2 mr-2"
                  onClick={() => startEditing(task.id)}
                >
                  Edit
                </button>
                <button
                  className="btn rounded-md bg-red-500 text-white p-2"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default TodoList;
