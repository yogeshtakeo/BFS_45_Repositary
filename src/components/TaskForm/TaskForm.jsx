import React, { useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import style from "./form.module.css";

function getTask(taskList, id) {
  return taskList.filter((task) => task.id === id)[0];
}

function TaskForm(props) {
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location.state);
  const task = location.state || {
    id: parseInt(Math.random() * 1000), // GENERATE RANDOM NUMBER FOR NEW TASK,
    title: "",
    completed: false,
    add: true,
  };
  const addMode = task.add;

  const [title, setTitle] = useState(task.title);
  const [completed, setCompleted] = useState(task.completed);

  const submitForm = (e) => {
    e.preventDefault();

    let newTaskData = {
      id: task.id,
      title,
      completed,
    };

    let taskList = props.todoLists;

    if (addMode) {
      taskList.push(newTaskData);
    } else {
      let taskIndex = taskList.indexOf(getTask(taskList, task.id));
      taskList[taskIndex] = newTaskData;
    }

    props.updateList(taskList);
    navigate("/");
  };

  return (
    <div>
      <div className={style.title}>
        {addMode ? "Add New Task" : `Edit ${title}`}
      </div>
      <form onSubmit={submitForm}>
        <label>Task ID</label>
        <p className={style.id}>{task.id}</p>
        <br />
        <label>Task Title</label>
        <input
          className="input-control"
          placeholder="Enter Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required={true}
          style={{ marginTop: "10px" }}
        />

        <br />
        <label className="checkbox">
          Completed
          <input
            className="checkbox-input"
            type="checkbox"
            checked={completed}
            onChange={() => setCompleted(!completed)}
          />
        </label>
        <br />
        <br />
        <button type="submit" className="btn">
          {addMode ? "Add" : "Save changes"}
        </button>
        {addMode ? (
          <></>
        ) : (
          <button
            type="button"
            className="btn danger-btn"
            style={{ marginLeft: "1rem" }}
          >
            Delete
          </button>
        )}
      </form>
    </div>
  );
}

export default TaskForm;
