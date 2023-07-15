import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ setUser, user }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }
  return (
    <nav>
      <Link to="/orders">Order History</Link>
      &nbsp;&nbsp;
      <Link to="/orders/new">New Order</Link>
      &nbsp;&nbsp;
      <Link to="/homepage">Home</Link>
      &nbsp;&nbsp;
      {user ? (
        <>
          &nbsp;&nbsp;<span>Welcome, {user.name}</span>
          &nbsp;&nbsp;
          <Link to="" onClick={handleLogOut}>
            Log Out
          </Link>
          &nbsp;&nbsp;
          <Link to="/eatcat">Eatery Categories</Link>
        </>
      ) : (
        <Link to="/authpage">Log In</Link>
      )}
    </nav>
  );
}
