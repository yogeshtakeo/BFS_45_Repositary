import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import style from "./list.module.css";

function TaskList(props) {
  const [taskList, updateList] = useState(props.todoLists);
  const [search, setSearch] = useState("");

  // UPDATE LIST ON PROPS CHANGE
  useEffect(() => updateList(props.todoLists), [props.todoLists]);

  return (
    <div>
      <div>
        <input
          className="input-control"
          placeholder="Filter Out Tasks"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <br />
      <hr />
      <br />
      <div className="center">
        <Link
          to="/form"
          state={{
            id: parseInt(Math.random() * 1000), // GENERATE RANDOM NUMBER FOR NEW TASK,
            title: "",
            completed: false,
            add: true,
          }}
          className={"btn " + style["action-btn"]}
        >
          Add Task
        </Link>
      </div>
      <br />
      <div>
        {taskList.length === 0 ? (
          <>
            <div className="center">No Tasks ~ Add New Tasks</div>
          </>
        ) : (
          taskList.map((task, index) => (
            <Link
              key={index}
              to="/form"
              state={task}
              className={
                task.completed ? `${style.list} ${style.completed}` : style.list
              }
            >
              {task.title}
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default TaskList;
