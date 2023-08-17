import { Container, Tab, Tabs } from "react-bootstrap";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SIgnUpForm/SignUpForm";
import { useContext } from "react";
import { MunchyContext } from "../App/App";

export default function Auth() {
  const context = useContext(MunchyContext);

  return (
    <Container>
      <Tabs defaultActiveKey="login" id="auth-tab" className="mb-3" fill>
        <Tab eventKey="signUp" title="Sign Up">
          <SignUpForm setUser={context.setUser} />
        </Tab>
        <Tab eventKey="login" title="Login">
          <LoginForm setUser={context.setUser} />
        </Tab>
      </Tabs>
    </Container>
  );
}
