import { Component, useState } from "react";
import { signUp } from "../../utilities/users-service";

export default class SignUpForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      // We don't want to send the 'error' or 'confirm' property,
      //  so let's make a copy of the state object, then delete them
      const formData = { ...this.state };
      delete formData.error;
      delete formData.confirm;
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch (err) {
      // An error occurred
      console.log(err);
      this.setState({ error: "Sign Up Failed - Try Again" });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white">
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
                    <p className="text-white-50 mb-5">
                      Fill out the credentials on the bottom
                    </p>

                    <form autoComplete="off" onSubmit={this.handleSubmit}>
                      <div className="form-outline form-white mb-4">
                        <label className="form-label">Name: </label>
                        <input
                          type="text"
                          name="name"
                          value={this.state.name}
                          onChange={this.handleChange}
                          required
                        />
                      </div>

                      <div className="form-outline form-white mb-4">
                        <label className="form-label">Password: </label>
                        <input
                          type="password"
                          name="password"
                          value={this.state.password}
                          onChange={this.handleChange}
                          required
                        />
                      </div>

                      <div className="form-outline form-white mb-4">
                        <label className="form-label">Confirm: </label>
                        <input
                          type="password"
                          name="confirm"
                          value={this.state.confirm}
                          onChange={this.handleChange}
                          required
                        />
                      </div>

                      <div className="form-outline form-white mb-4">
                        <label className="form-label">Email: </label>
                        <input
                          type="email"
                          name="email"
                          value={this.state.email}
                          onChange={this.handleChange}
                          required
                        />
                      </div>

                      <button
                        className="btn btn-outline-light btn-lg px-5"
                        type="submit"
                        disabled={disable}
                      >
                        SIGN UP
                      </button>
                    </form>
                  </div>
                  <div>
                    <p className="mb-0">
                      Have an account?{" "}
                      <button className="text-black-50 fw-bold" onClick={() => this.props.setShowSignUp(!this.props.showSignUp)}>{this.props.showSignUp ? 'Log In' : 'Sign Up'}</button>
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
}

{/* <div>
<div className="form-container">
  <form autoComplete="off" onSubmit={this.handleSubmit}>
    <label>Name</label>
    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
    <label>Email</label>
    <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
    <label>Password</label>
    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
    <label>Confirm</label>
    <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
    <button type="submit" disabled={disable}>SIGN UP</button>
  </form>
</div>
<p className="error-message">&nbsp;{this.state.error}</p>
</div> */}