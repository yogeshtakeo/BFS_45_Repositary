import { useState } from "react";
import "../App.css";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

function Home() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editId, setEditId] = useState(0);

  //console.log(todoList);

  // Add todo
  const handleSubmit = (e) => {
    e.preventDefault(); //prevent from refershing the page

    if (editId) {
      const editTodo = todoList.find((item) => item.id === editId);

      const updatedTodoList = todoList.map((item) =>
        item.id === editTodo.id
          ? (item = { id: item.id, todo, completed: false })
          : { id: item.id, todo: item.todo, completed: item.completed }
      );
      setTodoList(updatedTodoList);

      setEditId(0);
      setTodo("");
      return;
    }

    if (todo != "") {
      const newTodo = {
        id: `${todo}-${Date.now()}`, //unique id
        todo: todo,
        completed: false,
      };
      // create a shallow copy of todoList array, and add new todo.
      setTodoList([...todoList, newTodo]);
      console.log(todoList);
      setTodo(""); // clear input field
    }
  };

  // Edit todo
  const handleEdit = (id) => {
    const editTodo = todoList.find((item) => item.id === id); // returns element
    setTodo(editTodo.todo);
    setEditId(id);
  };

  // Delete todo
  const handleDelete = (id) => {
    const deleteTodo = todoList.filter((item) => item.id !== id);
    setTodoList([...deleteTodo]);
  };

  // Complete todo
  const handleComplete = (id) => {
    const completeTodo = todoList.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTodoList(completeTodo);
  };

  return (
    <div className="App">
      <h1>TODO APP</h1>
      <TodoForm
        handleSubmit={handleSubmit}
        todo={todo}
        setTodo={setTodo}
        editId={editId}
      />
      <TodoList
        todoList={todoList}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleComplete={handleComplete}
      />
    </div>
  );
}

export default Home;
