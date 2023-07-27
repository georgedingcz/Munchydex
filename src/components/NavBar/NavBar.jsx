import { Container, Form, Nav, Navbar, Row } from "react-bootstrap";
import SearchForm from "../Eatery/SearchForm";
export default function NavBar({ setUser, user }) {
  return (
    <Navbar
      expand="md"
      className="bg-body-tertiary"
      bg="light"
      data-bs-theme="light"
    >
      <Container>
        <Navbar.Brand href="/">Munchydex</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {user ? (
              <>
                <Nav.Link href="/myAcct">My Acct.</Nav.Link>
                {user.isAdmin ? (
                  <>
                    <Nav.Link href="/eatcat">Category</Nav.Link>
                  </>
                ) : (
                  <>
                    <Nav.Link href="eatery">Eatery</Nav.Link>
                    <Nav.Link href="/review">Review</Nav.Link>
                  </>
                )}
              </>
            ) : (
              <Nav.Link href="/authpage">Log In</Nav.Link>
            )}
            <Form inline>
              <Row xs="auto">
                <SearchForm />
              </Row>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
