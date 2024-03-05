import { useEffect, useState } from "react";

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
        <button className="btn">Add Task</button>
      </div>
      <br />
      <div>
        {taskList.length === 0 ? (
          <>
            <div className="center">No Tasks ~ Add New Tasks</div>
          </>
        ) : (
          taskList.map((task, index) => (
            <div key={index} className={style.list}>
              hello
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TaskList;
