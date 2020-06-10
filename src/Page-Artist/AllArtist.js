import React from "react";
import FilterListArtist from "./FilterList-Artist";
import FilterListTattoo from "./FilterList-Tattoo";
import Header from "../Page-Home/Header";
import Footer from "../Page-Home/Footer";
import { StyledForm, StyledMain } from "../Styled/AllArtistStyled";

class AllArtist extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showArtist: true, showStyle: false };
    this.onStyleChange = this.onStyleChange.bind(this);
    this.onArtistChange = this.onArtistChange.bind(this);
  }

  onStyleChange() {
    this.setState({
      showArtist: false,
      showStyle: true,
    });
  }

  onArtistChange() {
    this.setState({
      showArtist: true,
      showStyle: false,
    });
  }

  render() {
    return (
      <div>
        <Header />
        <StyledMain>
          <StyledForm>
            <p>Explore all artists</p>
            <label>
              <input
                name="artist"
                id="alphabetical"
                type="radio"
                onChange={this.onArtistChange}
              ></input>
              <span className="checkmark"></span>
              <span className="radio-choice">Alphabetically</span>
            </label>
            <label>
              <input
                name="artist"
                id="talents"
                type="radio"
                onChange={this.onArtistChange}
              ></input>
              <span className="checkmark"></span>
              <span className="radio-choice">New Talents</span>
            </label>
            <label>
              <input
                name="artist"
                id="rating"
                type="radio"
                onChange={this.onArtistChange}
              ></input>
              <span className="checkmark"></span>
              <span className="radio-choice">By Rating</span>
            </label>
          </StyledForm>
          <StyledForm>
            <p>Filter by style</p>
            <label>
              <input
                name="style"
                id="style"
                type="radio"
                onChange={this.onStyleChange}
              ></input>
              <span className="checkmark"></span>
              <span className="radio-choice">Black & White</span>
            </label>
            <label>
              <input
                name="style"
                id="style"
                type="radio"
                onChange={this.onStyleChange}
              ></input>
              <span className="checkmark"></span>
              <span className="radio-choice">Modern</span>
            </label>
            <label>
              <input
                name="style"
                id="style"
                type="radio"
                onChange={this.onStyleChange}
              ></input>
              <span className="checkmark"></span>
              <span className="radio-choice">Old School</span>
            </label>
            <label>
              <input
                name="style"
                id="style"
                type="radio"
                onChange={this.onStyleChange}
              ></input>
              <span className="checkmark"></span>
              <span className="radio-choice">Aboriginal</span>
            </label>
            <label>
              <input
                name="style"
                id="style"
                type="radio"
                onChange={this.onStyleChange}
              ></input>
              <span className="checkmark"></span>
              <span className="radio-choice">Japanese</span>
            </label>
          </StyledForm>
          {this.state.showArtist ? <FilterListArtist /> : <FilterListTattoo />}
        </StyledMain>
        <Footer />
      </div>
    );
  }
}

export default AllArtist;
