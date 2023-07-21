import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ setUser, user }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav
      className="navbar bg-dark border-bottom border-bottom-dark"
      data-bs-theme="dark"
    >
      <div className="container-fluid">

      <Link to="/homepage">Home</Link>
      {user ? (
        <>
          <span className="navbar-text">Welcome, {user.name}</span>
          <Link to="/homepage" onClick={handleLogOut}>
            Log Out
          </Link>
          {user.isAdmin ? (
            <>
              <Link to="/eatcat">Category</Link>
              <Link to="/eatery">Eatery</Link>
            </>
          ) : (
            <>
              <Link to="/createreview">Review</Link>
            </>
          )}
        </>
      ) : (
        <Link to="/authpage">Log In</Link>
      )}
      </div>
    </nav>
  );
}
