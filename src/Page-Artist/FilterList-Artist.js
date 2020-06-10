import React from "react";
import { Link } from "react-router-dom";
import { artist } from "../Page-Home/Artist";
import { FilterList, ProfileContainer } from "../Styled/AllArtistStyled";

class FilterListArtist extends React.Component {
  render() {
    return (
      <FilterList>
        <ProfileContainer>
          <p>{artist.name}</p>
          <img src={artist.profile} alt="" />
          <div>
            <p className="visit-profile">
              <Link to="/profile">Visit Profile</Link>
            </p>
            <button>Book</button>
          </div>
        </ProfileContainer>
        <ProfileContainer>
          <p>{artist.name}</p>
          <img src={artist.profile} alt="" />
          <div>
            <p className="visit-profile">
              <Link to="/profile">Visit Profile</Link>
            </p>
            <button>Book</button>
          </div>
        </ProfileContainer>
        <ProfileContainer>
          <p>{artist.name}</p>
          <img src={artist.profile} alt="" />
          <div>
            <p className="visit-profile">
              <Link to="/profile">Visit Profile</Link>
            </p>
            <button>Book</button>
          </div>
        </ProfileContainer>
        <ProfileContainer>
          <p>{artist.name}</p>
          <img src={artist.profile} alt="" />
          <div>
            <p className="visit-profile">
              <Link to="/profile">Visit Profile</Link>
            </p>
            <button>Book</button>
          </div>
        </ProfileContainer>
        <ProfileContainer>
          <p>{artist.name}</p>
          <img src={artist.profile} alt="" />
          <div>
            <p className="visit-profile">
              <Link to="/profile">Visit Profile</Link>
            </p>
            <button>Book</button>
          </div>
        </ProfileContainer>
        <ProfileContainer>
          <p>{artist.name}</p>
          <img src={artist.profile} alt="" />
          <div>
            <p className="visit-profile">
              <Link to="/profile">Visit Profile</Link>
            </p>
            <button>Book</button>
          </div>
        </ProfileContainer>
      </FilterList>
    );
  }
}

export default FilterListArtist;
