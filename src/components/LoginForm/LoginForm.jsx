import { useState } from "react";
import * as usersService from "../../utilities/users-service";
import { Navigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await usersService.login(credentials);
      setUser(user);
      setLoginSuccess(true);
    } catch {
      setError("Log In Failed - Try Again");
    }
  }

  if (loginSuccess) {
    return <Navigate to="/" />;
  }

  return (
      <Form className="section-container">
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="email"
            value={credentials.email}
            onChange={handleChange}
          />
          <Form.Text id="userEmailHelp" muted>
            (Required)
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <Form.Text id="passHelp" muted>
            (Required)
          </Form.Text>
        </Form.Group>
        <Button variant="primary" size="lg" onClick={handleSubmit}>
          LOG IN
        </Button>
        <p className="error-message">&nbsp;{error}</p>
      </Form>
  );
}
