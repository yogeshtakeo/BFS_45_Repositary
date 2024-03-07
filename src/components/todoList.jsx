import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TodoList({ todoList, handleEdit, handleDelete, handleComplete }) {
  return (
    <div>
      <ul className="todo-list">
        {todoList.map((item) => (
          <li
            className={`todo ${item.completed ? `complete` : ""}`}
            key={item.id}
          >
            <span className="todo-text">{item.todo}</span>

            <FontAwesomeIcon
              className="icon"
              icon={faPen}
              style={{ color: "#74C0FC" }}
              onClick={() => !item.completed && handleEdit(item.id)}
            />
            <FontAwesomeIcon
              className="icon"
              icon={faTrash}
              style={{ color: "#74C0FC" }}
              onClick={() => !item.completed && handleDelete(item.id)}
            />
            <FontAwesomeIcon
              className="icon"
              icon={faSquareCheck}
              style={{ color: "#74C0FC" }}
              onClick={() => handleComplete(item.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
