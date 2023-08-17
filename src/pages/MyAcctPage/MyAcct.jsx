import { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import sendRequest from "../../utilities/send-request";
import * as userService from "../../utilities/users-service";
import { useNavigate } from "react-router-dom";
import { MunchyContext } from "../App/App";

export default function MyAcct() {
  const context = useContext(MunchyContext);

  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    currentPass: "",
    newPass: "",
  });

  const [passChangeSuccess, setPassChangeSuccess] = useState(false);

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
  }

  async function handleUpdatePass(evt) {
    try {
      const id = context.user._id;
      const response = await sendRequest(
        `/api/users/${id}`,
        "PATCH",
        credentials
      );
      if (response.ok) {
        setPassChangeSuccess(true);
      }
    } catch (err) {
      console.log(err);
    }
  }

  function handleLogOut() {
    userService.logOut();
    context.setUser(null);
    navigate("/");
  }

  return (
    <Container>
      <Form className="section-container">
        <h2>Update Password</h2>
        <Form.Group>
          <Form.Label>Current Password</Form.Label>
          <Form.Control
            type="password"
            name="currentPass"
            value={credentials.currentPass}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>New Password</Form.Label>
          <Form.Control
            type="password"
            name="newPass"
            value={credentials.newPass}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" size="lg" onClick={handleUpdatePass}>
          Update Password
        </Button>
        {passChangeSuccess ? (
          <Form.Text id="passChangeSuccess" muted>
            Password has been changed!
          </Form.Text>
        ) : (
          <></>
        )}
      </Form>
      <Form className="section-container">
        <Button variant="primary" size="lg" onClick={handleLogOut}>
          Log Out
        </Button>
      </Form>
    </Container>
  );
}
