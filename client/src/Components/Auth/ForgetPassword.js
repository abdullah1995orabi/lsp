import React, { Component } from 'react'
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ErrorMessage } from "../Messages/Messages";
import { loginAction } from "../../Redux/actions/UserActions";
import { connect } from "react-redux";

export default class ForgetPassword extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          data: {
            email: "",
            
          },
          redirect: false,
          errors: {},
        };
        this.forgetHandler = this.forgetHandler.bind(this);
      }
      validate(data) {
        let error = {};
        if (!data.email) error.email = "email is required!";
        return error;
      }
    
      forgetHandler(e) {
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
            <div>
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
        <button onClick={this.forgetHandler} className="registerbtn">
          Senden
        </button>
            </div>
        )
    }
}
