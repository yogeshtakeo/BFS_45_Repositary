import { useState } from "react";
import { Button, Dropdown, DropdownButton, Form } from "react-bootstrap";
import PropTypes from "prop-types";

function AddForm(props) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Pending");

  function generateRandomId() {
    return Math.floor(Math.random() * 1000000); // Generate a random number
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: generateRandomId(),
      title,
      status,
    };
    // Call the function passed as a prop to handle the submitted data
    props.onSubmit(newTodo);
    // Clear the form fields
    setTitle("");
    setStatus("");
  };

  return (
    <div>
      <Form className="form" onSubmit={handleSubmit}>
        <Form.Group controlId="title" className="innerForm title">
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Todo Title"
          />
        </Form.Group>
        <Form.Group controlId="status" className="innerForm">
          <DropdownButton
            id="status-dropdown"
            title={status || "Select Status"}
          >
            <Dropdown.Item onClick={() => setStatus("Pending")}>
              Pending
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setStatus("Completed")}>
              Completed
            </Dropdown.Item>
          </DropdownButton>
        </Form.Group>
        <Button type="submit" className="btn btn-success b1">
          Add New Todo
        </Button>
      </Form>
    </div>
  );
}
AddForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default AddForm;
