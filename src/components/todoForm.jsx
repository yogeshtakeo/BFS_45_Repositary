function TodoForm({ handleSubmit, todo, setTodo, editId }) {
  return (
    <div>
      {" "}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add todo"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button className="add-btn" type="submit">
          {editId ? "Edit" : "Add"}
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
