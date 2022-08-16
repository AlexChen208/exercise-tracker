import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link to="/" className="nav-link">Create Exercise List</Link>
          <Link to="" className="nav-link" onClick={handleLogOut}>
            Log Out
          </Link>
        </div>
      </div>
    </div>
  </nav>
  );
}
