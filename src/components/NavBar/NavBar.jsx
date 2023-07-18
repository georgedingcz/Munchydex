import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ setUser, user }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/homepage">Home</Link>
      &nbsp;&nbsp;
      {user ? (
        <>
          &nbsp;&nbsp;
          <span>Welcome, {user.name}</span>
          &nbsp;&nbsp;
          <Link to="/homepage" onClick={handleLogOut}>
            Log Out
          </Link>
          {user.isAdmin ? (
            <>
              &nbsp;&nbsp;
              <Link to="/createeatcat">Add Category</Link>
              &nbsp;&nbsp;
              <Link to="/updateeatcat">Update Category</Link>
              &nbsp;&nbsp;
              <Link to="/createeatery">Create Eatery</Link>
              &nbsp;&nbsp;
            </>
          ) : (
            <>
              &nbsp;&nbsp;
              <Link to="/createreview">Create Review</Link>
              &nbsp;&nbsp;
            </>
          )}
        </>
      ) : (
        <Link to="/authpage">Log In</Link>
      )}
    </nav>
  );
}
