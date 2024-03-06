import { useState } from "react";
import { Table, Button } from "react-bootstrap";
import AddForm from "./add";
import UpdateForm from "./update"; // Assuming you have an UpdateForm component

function TodoList() {
  const [selectedTodos, setSelectedTodos] = useState([]);
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null); // State to manage selected todo for update

  const handleSubmit = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  function handleTodoSelection(todo) {
    const isSelected = selectedTodos.includes(todo.id);
    if (isSelected) {
      setSelectedTodos(selectedTodos.filter((id) => id !== todo.id));
    } else {
      setSelectedTodos([...selectedTodos, todo.id]);
    }
  }

  function handleDeleteTodos() {
    const updatedTodos = todos.filter(
      (todo) => !selectedTodos.includes(todo.id)
    );
    setTodos(updatedTodos);
    setSelectedTodos([]);
  }

  function handleUpdateTodo() {
    // Find the selected todo for update
    const todoToUpdate = todos.find((todo) => todo.id === selectedTodos[0]);
    if (todoToUpdate) {
      setSelectedTodo(todoToUpdate); // Set selected todo for update
    }
  }

  return (
    <div className="container">
      <h2 className="todo-header">Todo List with Bootstrap!</h2>
      <div>
        <AddForm onSubmit={handleSubmit} />
        {selectedTodo && <UpdateForm todo={selectedTodo} />}
      </div>

      <div>
        <Table className="table table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.status}</td>
                <td>
                  <input
                    type="checkbox"
                    onChange={() => handleTodoSelection(todo)}
                    checked={selectedTodos.includes(todo.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div>
        <Button className="btn btn-danger m-2" onClick={handleDeleteTodos}>
          Delete Todo
        </Button>
        <Button className="btn btn-warning m-2" onClick={handleUpdateTodo}>
          Update Todo
        </Button>
      </div>
    </div>
  );
}

export default TodoList;
