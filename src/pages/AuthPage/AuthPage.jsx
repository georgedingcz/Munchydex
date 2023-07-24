import { Container, Tab, Tabs } from "react-bootstrap";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SIgnUpForm/SignUpForm";

export default function Auth({ setUser }) {
  return (
    <Container>
      <h1>AuthPage</h1>
      <Tabs defaultActiveKey="login" id="auth-tab" className="mb-3">
        <Tab eventKey="signUp" title="Sign Up">
          <SignUpForm setUser={setUser} />
        </Tab>
        <Tab eventKey="login" title="Login">
          <LoginForm setUser={setUser} />
        </Tab>
      </Tabs>
    </Container>
  );
}
