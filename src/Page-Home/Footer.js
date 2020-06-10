import React from "react";
import { StyledFooter } from "../Styled/HomeStyled";

class Footer extends React.Component {
  render() {
    return (
      <StyledFooter>
        <div>
          <p>
            <a href="/">Contact us</a> <a href="/">About</a>
            <a href="/" id="mobile-terms">
              Terms and Conditions
            </a>
          </p>
          <a href="/" id="terms">
            Terms and Conditions
          </a>
        </div>
        <form method="POST">
          Subscribe to Newsletter: <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="mail@example.com"
          ></input>
        </form>
      </StyledFooter>
    );
  }
}

export default Footer;
