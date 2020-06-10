import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { StyledHeader } from "../Styled/HeaderStyled";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.showModal = this.showModal.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  showModal = (e) => {
    this.setState({
      show: !this.state.show,
    });
  };

  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    return (
      <div>
        <StyledHeader>
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="60"
              viewBox="0 0 603.253 167.405"
            >
              <g
                id="Group_577"
                data-name="Group 577"
                transform="translate(-83.377 -89.802)"
              >
                <path
                  id="Path_3604"
                  data-name="Path 3604"
                  d="M164.25,188.569c-8.478,0-11.739-3.043-11.087-8.481,14.785,2.609,35.769,2.891,50.551,2.891H242.2l.087,72.054h-4.109l0-52.4c-13.913,36.089-41.089,54.57-73.048,54.57-46.744,0-81.746-32.828-81.746-81.094,0-51.089,36.959-86.311,90.659-86.311,42.393,0,68.917,17.394,68.917,42.4a38.149,38.149,0,0,1-11.087,27.176c-9.133-23.263-46.744-50-87.4-50-34.785,0-54.135,20.872-54.135,49.567,0,36.31,37.673,70.088,87.833,67.616,35.881-1.767,54.585-13.419,60.672-39.94H216.429C199.038,186.613,175.558,188.569,164.25,188.569Z"
                  transform="translate(0)"
                  fill="var(--purple)"
                />
                <path
                  id="Path_3605"
                  data-name="Path 3605"
                  d="M164.506,253.559V251.82c29.133-3.478,49.787-24.568,49.787-70.442v-18.7c0-46.309-21.089-66.961-49.787-70.439V90.5h102.18v1.742c-28.7,3.478-49.787,24.13-49.787,70.439v18.7c0,45.874,20.655,66.964,49.787,70.442v1.739Z"
                  transform="translate(170.817 1.474)"
                  fill="var(--purple)"
                />
                <path
                  id="Path_3606"
                  data-name="Path 3606"
                  d="M381.724,90.5l5.866,79.572-1.519.652c-16.524-39.567-48.918-77.616-78.268-77.616v76.311c0,45.874,25.22,78.92,54.135,82.4v1.739H251.06V251.82c28.915-3.478,54.135-36.524,54.135-82.4V93.111c-29.785.435-61.744,38.266-78.265,77.616l-1.525-.652L231.274,90.5Z"
                  transform="translate(299.04 1.474)"
                  fill="var(--purple)"
                />
                <g
                  id="Group_574"
                  data-name="Group 574"
                  transform="translate(455.261 150.754)"
                >
                  <g id="Group_573" data-name="Group 573">
                    <path
                      id="Path_3607"
                      data-name="Path 3607"
                      d="M228.3,127.236v4.727c0,11.6-5.223,16.928-12.587,17.81-7.366-.882-12.587-6.211-12.587-17.81v-4.727c0-11.708,5.332-16.928,12.587-17.807C222.968,110.308,228.3,115.528,228.3,127.236Z"
                      transform="translate(-203.127 -109.429)"
                      fill="var(--purple)"
                    />
                  </g>
                </g>
                <g
                  id="Group_576"
                  data-name="Group 576"
                  transform="translate(297.449 150.754)"
                >
                  <g id="Group_575" data-name="Group 575">
                    <path
                      id="Path_3608"
                      data-name="Path 3608"
                      d="M177.483,127.236v4.727c0,11.6-5.223,16.928-12.587,17.81-7.366-.882-12.587-6.211-12.587-17.81v-4.727c0-11.708,5.329-16.928,12.587-17.807C172.151,110.308,177.483,115.528,177.483,127.236Z"
                      transform="translate(-152.31 -109.429)"
                      fill="var(--purple)"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </Link>
          <form for="search" id="mobile">
            <img
              src="https://img.icons8.com/pastel-glyph/64/000000/search--v1.png"
              alt="search"
            />
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search"
            ></input>
          </form>
          <p
            onClick={(e) => {
              this.showModal();
            }}
          >
            Login
          </p>
        </StyledHeader>
        <Login onClose={this.showModal} show={this.state.show}></Login>
      </div>
    );
  }
}

export default Header;
