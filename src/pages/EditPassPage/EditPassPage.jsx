import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import sendRequest from "../../utilities/send-request";

export default function EditPass({ user, setUser, newMegaState }) {
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
      const id = user._id;
      const response = await sendRequest(
        `/api/users/${id}`,
        "PATCH",
        credentials
      );
      setPassChangeSuccess(true);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <Form className="section-container">
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
    </>
  );
}
