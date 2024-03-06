import { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";

function UpdateForm({ todo, onUpdate }) {
  const [title, setTitle] = useState(todo.title);
  const [status, setStatus] = useState(todo.status);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTodo = {
      ...todo,
      title,
      status,
    };
    onUpdate(updatedTodo);
  };

  return (
    <div>
      <h2>Update Todo</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Title:</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="status">
          <Form.Label>Status:</Form.Label>
          <Form.Control
            as="select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </Form.Control>
        </Form.Group>
        <Button type="submit">Update</Button>
      </Form>
    </div>
  );
}

UpdateForm.propTypes = {
  todo: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default UpdateForm;
