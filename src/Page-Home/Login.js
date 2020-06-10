import React from "react";
import { LoginModal } from "../Styled/HeaderStyled";

class Login extends React.Component {
  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <LoginModal>
        <div>
          <p>Log in</p>
          <input type="email" placeholder="E-mail"></input>
          <br />
          <input type="password" placeholder="Password"></input>
          <p className="password">Forgot password?</p>
          <button>GO!</button>
        </div>
        <div className="create-profile">
          <p>Create Profile</p>
        </div>
        <p
          className="close-button"
          onClick={(e) => {
            this.onClose(e);
          }}
        >
          &times;
        </p>
      </LoginModal>
    );
  }
}

export default Login;
