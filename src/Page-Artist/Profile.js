import React from "react";
import { Link } from "react-router-dom";
import Header from "../Page-Home/Header";
import Footer from "../Page-Home/Footer";
import { artist } from "../Page-Home/Artist";
import { StyledMain } from "../Styled/AllArtistStyled";
import {
  BackTo,
  MainProfile,
  Mobile,
  Portfolio,
  LatestWork,
} from "../Styled/ProfileStyled";

class Profile extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <StyledMain>
          <BackTo>
            <Link to="/allartist">
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
              Back to all artists
            </Link>
          </BackTo>
          <MainProfile>
            <div className="profile-container">
              <p>{artist.name}</p>
              <img src={artist.profile} alt="" />
            </div>
            <div className="book-section">
              <button>Book</button>
              <div className="info-section">
                <p>
                  Consultancy in min. <br />
                  <span>40'</span>
                </p>
                <p>
                  Fee <br />
                  <span>€80</span>
                </p>
                <p>
                  Follow <br />
                  <span>
                    <svg
                      data-icon="instagram"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 540 540"
                    >
                      <path
                        fill="black"
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                      ></path>
                    </svg>
                  </span>
                </p>
              </div>
              <p className="bio">
                <strong>Bio</strong> <br />
                {artist.shortbio}
              </p>
            </div>
          </MainProfile>
          <Mobile>
            <p className="bio">
              <strong>Bio</strong> <br />
              {artist.longbio}
            </p>
          </Mobile>
          <LatestWork>Lastest Work</LatestWork>
          <Portfolio>
            <div className="container">
              <img src={artist.imageSrc[0]} alt="" />
              <div className="overlay">
                <p className="tattoo-name">{artist.tattooName[0]}</p>
                <p className="image-category">
                  Category: <br />
                  <span>{artist.category}</span>
                </p>
              </div>
            </div>
            <div className="container">
              <img src={artist.imageSrc[1]} alt="" />
              <div className="overlay">
                <p className="tattoo-name">{artist.tattooName[1]}</p>
                <p className="image-category">
                  Category: <br />
                  <span>{artist.category}</span>
                </p>
              </div>
            </div>
            <div className="container">
              <img src={artist.imageSrc[2]} alt="" />
              <div className="overlay">
                <p className="tattoo-name">{artist.tattooName[2]}</p>
                <p className="image-category">
                  Category: <br />
                  <span>{artist.category}</span>
                </p>
              </div>
            </div>
            <div className="container">
              <img className="portrait" src={artist.imageSrc[3]} alt="" />
              <div className="overlay">
                <p className="tattoo-name">{artist.tattooName[3]}</p>
                <p className="image-category">
                  Category: <br />
                  <span>{artist.category}</span>
                </p>
              </div>
            </div>
            <div className="container">
              <img className="portrait" src={artist.imageSrc[4]} alt="" />
              <div className="overlay">
                <p className="tattoo-name">{artist.tattooName[4]}</p>
                <p className="image-category">
                  Category: <br />
                  <span>{artist.category}</span>
                </p>
              </div>
            </div>
            <div className="container">
              <img className="portrait" src={artist.imageSrc[5]} alt="" />
              <div className="overlay">
                <p className="tattoo-name">{artist.tattooName[5]}</p>
                <p className="image-category">
                  Category: <br />
                  <span>{artist.category}</span>
                </p>
              </div>
            </div>
            <div className="container">
              <img className="portrait" src={artist.imageSrc[6]} alt="" />
              <div className="overlay">
                <p className="tattoo-name">{artist.tattooName[6]}</p>
                <p className="image-category">
                  Category: <br />
                  <span>{artist.category}</span>
                </p>
              </div>
            </div>
            <div className="container">
              <img src={artist.imageSrc[7]} alt="" />
              <div className="overlay">
                <p className="tattoo-name">{artist.tattooName[7]}</p>
                <p className="image-category">
                  Category: <br />
                  <span>{artist.category}</span>
                </p>
              </div>
            </div>
            <div className="container" id="mobile-container">
              <img src={artist.imageSrc[8]} alt="" />
              <div className="overlay">
                <p className="tattoo-name">{artist.tattooName[8]}</p>
                <p className="image-category">
                  Category: <br />
                  <span>{artist.category}</span>
                </p>
              </div>
            </div>
          </Portfolio>
        </StyledMain>
        <Footer />
      </div>
    );
  }
}

export default Profile;
