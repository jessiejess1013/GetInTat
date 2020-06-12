import React from "react";
import { Link } from "react-router-dom";
import { artist } from "../Page-Home/Artist";
import { FilterList, TattooContainer } from "../Styled/AllArtistStyled";

class FilterListTattoo extends React.Component {
  render() {
    return (
      <FilterList>
        <TattooContainer>
          <p>{artist.name}</p>
          <div className="container">
            <img src={artist.imageSrc[0]} alt="" />
          </div>
          <div>
            <p className="visit-profile">
              <Link to="/profile">Visit Profile</Link>
            </p>
            <button>Book</button>
          </div>
        </TattooContainer>
        <TattooContainer>
          <p>{artist.name}</p>
          <div className="container">
            <img src={artist.imageSrc[1]} alt="" />
          </div>
          <div>
            <p className="visit-profile">
              <Link to="/profile">Visit Profile</Link>
            </p>
            <button>Book</button>
          </div>
        </TattooContainer>
        <TattooContainer>
          <p>{artist.name}</p>
          <div className="container">
            <img src={artist.imageSrc[2]} alt="" />
          </div>
          <div>
            <p className="visit-profile">
              <Link to="/profile">Visit Profile</Link>
            </p>
            <button>Book</button>
          </div>
        </TattooContainer>
        <TattooContainer>
          <p>{artist.name}</p>
          <div className="container">
            <img className="portrait" src={artist.imageSrc[3]} alt="" />
          </div>
          <div>
            <p className="visit-profile">
              <Link to="/profile">Visit Profile</Link>
            </p>
            <button>Book</button>
          </div>
        </TattooContainer>
        <TattooContainer>
          <p>{artist.name}</p>
          <div className="container">
            <img className="portrait" src={artist.imageSrc[4]} alt="" />
          </div>
          <div>
            <p className="visit-profile">
              <Link to="/profile">Visit Profile</Link>
            </p>
            <button>Book</button>
          </div>
        </TattooContainer>
        <TattooContainer>
          <p>{artist.name}</p>
          <div className="container">
            <img className="portrait" src={artist.imageSrc[5]} alt="" />
          </div>
          <div>
            <p className="visit-profile">
              <Link to="/profile">Visit Profile</Link>
            </p>
            <button>Book</button>
          </div>
        </TattooContainer>
        <TattooContainer>
          <p>{artist.name}</p>
          <div className="container">
            <img className="portrait" src={artist.imageSrc[6]} alt="" />
          </div>
          <div>
            <p className="visit-profile">
              <Link to="/profile">Visit Profile</Link>
            </p>
            <button>Book</button>
          </div>
        </TattooContainer>
        <TattooContainer>
          <p>{artist.name}</p>
          <div className="container">
            <img src={artist.imageSrc[7]} alt="" />
          </div>
          <div>
            <p className="visit-profile">
              <Link to="/profile">Visit Profile</Link>
            </p>
            <button>Book</button>
          </div>
        </TattooContainer>
        <TattooContainer id="mobile-container">
          <p>{artist.name}</p>
          <div className="container">
            <img src={artist.imageSrc[8]} alt="" />
          </div>
          <div>
            <p className="visit-profile">
              <Link to="/profile">Visit Profile</Link>
            </p>
            <button>Book</button>
          </div>
        </TattooContainer>
      </FilterList>
    );
  }
}

export default FilterListTattoo;
