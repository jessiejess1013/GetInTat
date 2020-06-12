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
                  x="18.62"
                  y="17.653"
                  transform="matrix(0.7071 -0.7071 0.7071 0.7071 -1.1811 37.4536)"
                  fill="var(--grey)"
                  width="52"
                  height="5"
                />
                <rect
                  x="18.621"
                  y="58.347"
                  transform="matrix(0.7071 0.7071 -0.7071 0.7071 56.0943 -13.7298)"
                  fill="var(--grey)"
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
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1000 1000"
                    >
                      <path
                        fill="#00FC96"
                        d="M967.185,746.261c0,122.155-99.024,221.179-221.179,221.179H254.55c-122.155,0-221.179-99.024-221.179-221.179V254.739c0-122.155,99.024-221.179,221.179-221.179h491.456c122.155,0,221.179,99.024,221.179,221.179V746.261z"
                      />
                      <path
                        fill="#231F20"
                        d="M746,998.248H254.557c-138.97,0-252.08-113.004-252.08-251.974V254.726c0-138.97,113.109-252.08,252.08-252.08H746c138.97,0,252.08,113.109,252.08,252.08v491.548C998.079,885.245,884.97,998.248,746,998.248z M254.557,64.474c-104.919,0-190.259,85.34-190.259,190.259v491.548c0,104.919,85.34,190.259,190.259,190.259h491.443c104.919,0,190.364-85.34,190.364-190.259V254.733c0-104.919-85.445-190.259-190.364-190.259H254.557z"
                      />
                      <circle
                        fill="#00FC96"
                        cx="500.282"
                        cy="500.503"
                        r="245.383"
                      />
                      <path
                        fill="#231F20"
                        d="M500.308,781.925c-155.194,0-281.5-126.306-281.5-281.448c0-155.194,126.306-281.448,281.5-281.448c155.141,0,281.448,126.254,281.448,281.448C781.755,655.618,655.449,781.925,500.308,781.925z M500.308,291.173c-115.451,0-209.357,93.906-209.357,209.304c0,115.451,93.906,209.304,209.357,209.304s209.304-93.853,209.304-209.304C709.612,385.078,615.759,291.173,500.308,291.173z"
                      />
                      <circle
                        fill="#231F20"
                        cx="786.42"
                        cy="215.891"
                        r="58.341"
                      />
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
