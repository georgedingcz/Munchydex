import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

export default function EditPass({ user, setUser, newMegaState }) {
  const [credentials, setCredentials] = useState({
    password: "",
  });

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
  }

  async function handleUpdatePass(evt) {
    evt.preventDefault();
    const id = user._id;
    const updatedPass = {
      password: credentials.password,
    };
    try {
      await fetch(`/api/users/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPass),
      });
    } catch (err) {
      console.log(err);
    }
  }
  return (
      <Form className="section-container">
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" size="lg" onClick={handleUpdatePass}>
          Update Password
        </Button>
      </Form>

  );
}
