import React, { Component } from "react";
import { Link } from "react-router-dom";
import { signin, signInWithGoogle, signInWithGitHub } from "../helpers/auth";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.googleSignIn = this.googleSignIn.bind(this);
    this.githubSignIn = this.githubSignIn.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ error: "" });
    try {
      await signin(this.state.email, this.state.password);
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  async googleSignIn() {
      try {
        await signInWithGoogle();
      } catch (error) {
        this.setState({ error: error.message });
      }
  }

  async githubSignIn() {
      try {
        await signInWithGitHub();
      } catch (error) {
        this.setState({ error: error.message });
      }
  }

  render() {
    return (
      <section className="login-block">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <form className="md-float-material form-material" autoComplete="off" onSubmit={this.handleSubmit}>
                <div className="auth-box card">
                  <div className="card-block">
                    <div className="row">
                      <h1>Login to<Link className="link-without-border" to="/"> CHATTY</Link></h1>
                      <p>Fill in the form below to login to your account.</p>
                    </div>
                    <div className="form-group form-primary">
                      <input placeholder="Email" className="form-control" name="email" type="email" onChange={this.handleChange} value={this.state.email} />
                    </div>
                    <div className="form-group form-primary">
                      <input placeholder="Password" className="form-control" name="password" onChange={this.handleChange} value={this.state.password} type="password" />
                    </div>
                    <div>
                      {this.state.error ? (
                        <p>{this.state.error}</p>
                      ) : null}
                      <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-info btn-lg btn-block">Login</button>
                        <button onClick={this.googleSignIn} type="button" className="btn btn-lg btn-google btn-block text-uppercase">
                          <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="icon" /> Signup Using Google
                        </button>
                        <button type="button" onClick={this.githubSignIn} className="btn btn-lg btn-google btn-block text-uppercase">
                          <img src="https://img.icons8.com/color/20/000000/github-2.png" alt="icon"/> Sign up with GitHub
                        </button>
                      </div>
                    </div>
                    <hr />
                    <p className="text-inverse text-center">Don't have an account? <Link Link className="link-without-border" to="/signup">Sign up</Link></p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}