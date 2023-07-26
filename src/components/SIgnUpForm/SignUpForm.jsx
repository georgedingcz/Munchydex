import { Component } from "react";
import { signUp } from "../../utilities/users-service";
import { Navigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

export default class SignUpForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
    signUpSuccess: false,
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };
  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = { ...this.state };
      delete formData.error;
      delete formData.confirm;
      const user = await signUp(formData);
      this.props.setUser(user);
      this.setState({ signUpSuccess: true });
    } catch {
      this.setState({ error: "Sign Up Failed - Try Again" });
    }
  };

  render() {
    const disable =
      this.state.password !== this.state.confirm ||
      this.state.email === "" ||
      this.state.name === "";
    if (this.state.signUpSuccess) {
      return <Navigate to="/homepage" />;
    }
    return (
      <Form className="section-container">
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <Form.Text id="userNameHelp" muted>
            (Required)
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
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
            value={this.state.password}
            onChange={this.handleChange}
          />
          <Form.Text id="passHelp" muted>
            (Required) Your password must be at least 3 characters long
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Confirm</Form.Label>
          <Form.Control
            type="password"
            name="confirm"
            value={this.state.confirm}
            onChange={this.handleChange}
          />
          <Form.Text id="confirmPassHelp" muted>
            (Required) Repeat the same password as above
          </Form.Text>
        </Form.Group>
        <Button
          variant="primary"
          size="lg"
          disabled={disable}
          onClick={this.handleSubmit}
        >
          SIGN UP
        </Button>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </Form>
    );
  }
}
