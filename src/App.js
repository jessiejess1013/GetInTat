import React from "react";
import { Link } from "react-router-dom";
import Artist from "./Page-Home/Artist";
import Style from "./Page-Home/Style";
import Header from "./Page-Home/Header";
import Footer from "./Page-Home/Footer";
import { Intro, NavArtist, NavStyle } from "./Styled/HomeStyled";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showStyle: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      showStyle: !state.showStyle,
    }));
  }

  render() {
    return (
      <div>
        <Header />
        <Intro>
          Here you can explore and book tattoo artists based in Berlin.
        </Intro>

        <Artist />
        <NavArtist>
          <Link to="/allartist">
            Explore All Artists
            <svg
              className="icons"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 80.654 81"
            >
              <rect
                x="18.621"
                y="17.653"
                transform="matrix(0.7071 0.7071 -0.7071 0.7071 27.3191 -25.6492)"
                fill="#231F20"
                width="52"
                height="5"
              />
              <rect
                x="18.621"
                y="58.347"
                transform="matrix(0.7071 -0.7071 0.7071 0.7071 -29.9565 49.3735)"
                fill="#231F20"
                width="52"
                height="5"
              />
            </svg>
          </Link>
        </NavArtist>
        <NavStyle>
          <p onClick={this.handleClick}>
            Check basic styles
            {this.state.showStyle ? (
              <svg
                className="icons"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 80.654 80.787"
              >
                <rect
                  x="42.665"
                  y="37.894"
                  fill="#231F20"
                  width="37.835"
                  height="5"
                />
                <rect
                  x="0.154"
                  y="37.894"
                  fill="#231F20"
                  width="37.511"
                  height="5"
                />
              </svg>
            ) : (
              <svg
                className="icons"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 80.654 80.787"
              >
                <rect
                  x="37.665"
                  y="-0.209"
                  fill="#231F20"
                  width="5"
                  height="38.103"
                />
                <rect
                  x="37.665"
                  y="42.894"
                  fill="#231F20"
                  width="5"
                  height="37.894"
                />
                <rect
                  x="42.665"
                  y="37.894"
                  fill="#231F20"
                  width="37.835"
                  height="5"
                />
                <rect
                  x="0.154"
                  y="37.894"
                  fill="#231F20"
                  width="37.511"
                  height="5"
                />
              </svg>
            )}
          </p>
          {this.state.showStyle ? <Style /> : null}
        </NavStyle>
        <Footer />
      </div>
    );
  }
}

export default App;
