import { useState } from "react";
import * as usersService from "../../utilities/users-service";
import "./LoginForm.css";

export default function LoginForm({ setUser, setShowSignUp, showSignUp }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError("Log In Failed - Try Again");
    }
  }

  return (
  <section className="vh-100 gradient-custom">
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card bg-dark text-white">
            <div className="card-body p-5 text-center">
  
              <div className="mb-md-5 mt-md-4 pb-5 LoginForm">
                <h1>Maxium Pump AYOO?</h1>
                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                <p className="text-white-50 mb-5">Please enter your login and password!</p>
  
                <form autoComplete="off" onSubmit={handleSubmit}>
                  <div className="form-outline form-white mb-4">
                    <input className="form-control form-control-lg" type="text" name="email" value={credentials.email} onChange={handleChange} required />
                    <label className="form-label" htmlFor="typeEmailX">Email</label>
                  </div>
  
                  <div className="form-outline form-white mb-4">
                    <input className="form-control form-control-lg" type="password" name="password" value={credentials.password} onChange={handleChange} required />
                    <label className="form-label" htmlFor="typePasswordX">Password</label>
                  </div>
                <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
                </form>
              </div>
              <div>
                <p className="mb-0" >
                Don't have an account? 
                <button className="text-black-50 fw-bold" onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
                </p>
              </div>
  
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> 
  );
}

