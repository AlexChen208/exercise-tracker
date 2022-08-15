import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    setUser(null);
  }

  return (
    // <nav>
    //   <span>Welcome, {user.name}</span>
    //   &nbsp; | &nbsp;
    //   <Link to="/detail">Create Exercise Log</Link>
    //   &nbsp; | &nbsp;
    //   <Link to="" onClick={handleLogOut}>
    //     Log Out
    //   </Link>
    // </nav>
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
    <span className="navbar-brand" href="#">Welcome, {user.name}</span>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link to="/detail" className="nav-link">Create Exercise List</Link>
          <Link to="" className="nav-link" onClick={handleLogOut}>
            Log Out
          </Link>
        </div>
      </div>
    </div>
  </nav>
  );
}
