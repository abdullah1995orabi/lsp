import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ErrorMessage } from "../Messages/Messages";
import { loginAction } from "../../Redux/actions/UserActions";
import { connect } from "react-redux";
class Anmendung extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        email: "",
        password: "",
      },
      redirect: false,
      errors: {},
    };
    this.anmeldenHandler = this.anmeldenHandler.bind(this);
  }
  validate(data) {
    let error = {};
    if (!data.email) error.email = "email is required!";
    if (!data.password) error.password = "password is required!";

    return error;
  }

  anmeldenHandler(e) {
    let errors = this.validate(this.state.data);
    this.setState({ errors: errors });

    if (Object.keys(errors).length === 0) {
      this.props
        .loginAction(this.state.data)
        .then((data) => {
          toast(data.message);
          this.setState({ redirect: true });
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    }
  }

  render() {
    return (
      <div className="container">
        {this.state.redirect && <Navigate to="/" />}
        <h1>Anmeldung</h1>
        <p>melde dich an</p>
        <hr />
        <label htmlFor="email">
          {this.state.errors.email && (
            <ErrorMessage message={this.state.errors.email} />
          )}
          <b>Email</b>
        </label>
        <input
          onChange={(e) =>
            this.setState({
              data: { ...this.state.data, email: e.target.value },
            })
          }
          type="email"
          placeholder="Enter Email"
          name="email"
          id="email"
          required
        />

        <label htmlFor="password">
          {this.state.errors.password && (
            <ErrorMessage message={this.state.errors.password} />
          )}
          <b>Password</b>
        </label>
        <input
          type="password"
          onChange={(e) =>
            this.setState({
              data: { ...this.state.data, password: e.target.value },
            })
          }
          placeholder="Enter Password"
          name="password"
          id="password"
          required
        />
        <Link to="/forgetpassword" className="btn btn-outline-success text-dark">
          password vergessen
        </Link>

        <button onClick={this.anmeldenHandler} className="registerbtn">
          Anmelden
        </button>
      </div>
    );
  }
}

export default connect(null, { loginAction })(Anmendung);
