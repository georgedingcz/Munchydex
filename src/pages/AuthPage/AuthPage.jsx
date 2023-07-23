import { Container } from "react-bootstrap";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SIgnUpForm/SignUpForm";

export default function Auth({ setUser }) {
  return (
    <Container>
      <h1>AuthPage</h1>
      <SignUpForm setUser={setUser} />
      <LoginForm setUser={setUser} />
    </Container>
  );
}
