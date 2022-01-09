import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { resetPasswordAction } from "../../Redux/actions/UserActions";
import { connect } from "react-redux";
import { toast } from "react-toastify";
function ResetPassword({ resetPasswordAction }) {
  const { token } = useParams();

  let [password, setPassword] = useState("");
  let [passwordConfirmation, setPasswordConfirmation] = useState("");

  const resetPasswordHelper = () => {
    if (!password) {
      toast.error("password is required!");
      return
    }
    if (password !== passwordConfirmation) {
      toast.error("password did not matched!");
      return
    }

    resetPasswordAction({token: token, password: password}).then(data => {
    toast.success(data.message)
    }).catch(err => {
        toast.error(err.response.data.message)
    });
};

//   useEffect(() => {
//     console.log(token);
//   }, []);

  return (
    <div>
      <label htmlFor="password">
        {/* {this.state.errors.password && (
          <ErrorMessage message={this.state.errors.password} />
        )} */}

        <b>Password</b>
      </label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Enter Password"
        name="password"
        id="password"
        required
      />
      <label htmlFor="password">
        {/* {this.state.errors.passwordConfirmation && (
          <ErrorMessage message={this.state.errors.passwordConfirmation} />
        )} */}

        <b>Password Wiederholung</b>
      </label>
      <input
        onChange={(e) => setPasswordConfirmation(e.target.value)}
        type="password"
        placeholder="Password Wiederholung"
        name="passwordConfirmation"
        id="passwordConfirmation"
        required
      />
      <button onClick={() => resetPasswordHelper()} className="registerbtn">
        Reset Password
      </button>
    </div>
  );
}

export default connect(null, { resetPasswordAction })(ResetPassword);

// functionnal Component
// function ResetPassword() {
//     const { token } = useParams();
//     let [counter, setCounter] = useState(0);

//     return <div onClick={() => setCounter(counter++)}>{counter}</div>;
//   }
